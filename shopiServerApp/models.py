from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String, Date, UniqueConstraint
from sqlalchemy.orm import relationship

from .database import Base


class URL(Base):
    __tablename__="input_url"
    id = Column(Integer, primary_key=True, index = True)
    url = Column(String)
    output = Column(Integer)


class FeedBackURL(Base):
    __tablename__ = "feedback_url"
    id = Column(Integer, primary_key=True, index = True)
    url = Column(String)
    feedback = Column(Integer)





 
