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



@app.post("/feedback",response_model=schemas.URLFeedbackResponse)
async def feedback_URL(url: schemas.URLFeedbackResponse, db: Session = Depends(get_db)):
    return crud.feedback_url(db=db,url=url, feedback = url.feedback)
