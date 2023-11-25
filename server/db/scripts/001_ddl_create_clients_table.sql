CREATE TABLE IF NOT EXISTS clients (
    id          serial      PRIMARY KEY,
    login       text        NOT NULL UNIQUE,
    password    text        NOT NULL
);