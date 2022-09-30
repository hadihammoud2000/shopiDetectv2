from datetime import datetime, date
from fastapi import Depends, FastAPI, HTTPException, status, File, UploadFile,Form
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine
from joblib import load
from .svm import svm as svm
from .svm import createColumnsList as ccl
import numpy as np
from os.path import dirname, abspath, join
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)
DIR_NAME = dirname(dirname(abspath(__file__)))
app = FastAPI()


svm = load(join(DIR_NAME,'shopiServerApp/ml/dumpedSVM.joblib'))


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# @app.on_event('startup')
# async def load_model(svm):

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/check",response_model=schemas.URLResponse)
async def add_URL(url: schemas.URLBase, db: Session = Depends(get_db)):
    exists, output = crud.check_url(db=db,url = url)
    if exists:
        return output

    data = ccl(url.url,0,'')
    TempArr = np.array(data)
    TempArr = TempArr.reshape(1,-1)
    y_Predict = svm.predict(TempArr)

    print(y_Predict)
    checkedUrl = crud.add_url(db = db, url = url, output = int(y_Predict[0]))
    
    return checkedUrl