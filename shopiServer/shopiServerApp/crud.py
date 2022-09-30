from sqlalchemy.orm import Session, joinedload
from . import models, schemas
from sqlalchemy import desc


def add_url(db: Session, url: str):
    db_URL = models.URL(
        url = url.url,
        output = 1
    )

    db.add(db_URL)
    db.commit()
    db.refresh(db_URL)
    