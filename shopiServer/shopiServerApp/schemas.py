from pydantic import BaseModel
from pydantic.schema import Optional



class URLBase(BaseModel):
    url: str


class URLResponse(BaseModel):
    url:str
    output: Optional[int]

    class Config:
        orm_mode = True

class URL(URLBase):
    id: int
    output: Optional[int]

    class Config:
        orm_mode = True

