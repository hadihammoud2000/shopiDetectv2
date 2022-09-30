from sqlalchemy.orm import Session, joinedload
from . import models, schemas
from sqlalchemy import desc



def check_url(db: Session, url: str):
    q = db.query(models.URL).filter(models.URL.url==url.url).first()
    if q:
        print(q)
        return True, q
    else:
        return False, None

def add_url(db: Session, url: str, output: int):
    db_URL = models.URL(
        url = url.url,
        output = output
    )

    db.add(db_URL)
    db.commit()
    db.refresh(db_URL)

    return db_URL
    