from datetime import datetime, date
from fastapi import Depends, FastAPI, HTTPException, status, File, UploadFile,Form
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)


app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



@app.post("/check",response_model=schemas.URLResponse)
def add_URL(url: schemas.URLBase, db: Session = Depends(get_db)): 
    checkUrl = crud.add_url(db = db, url = url)
    return url