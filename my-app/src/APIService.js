export default class APIService {
  static UpdateArticle(article_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static UpdateNote(note_id, body) {
    return fetch(`http://127.0.0.1:8000/api/notes/${note_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertNote(body) {
    return fetch("http://127.0.0.1:8000/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteArticle(article_id, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static CellStatus(cellid, token) {
    return fetch(`http://127.0.0.1:8000/api/cellAlarms/${cellid}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
