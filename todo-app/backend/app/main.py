from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/todos")
def read_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)

@app.post("/todos")
def create(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo)

@app.put("/todos/{todo_id}")
def toggle(todo_id: int, db: Session = Depends(get_db)):
    return crud.toggle_todo(db, todo_id)

@app.delete("/todos/{todo_id}")
def delete(todo_id: int, db: Session = Depends(get_db)):
    return crud.delete_todo(db, todo_id)
