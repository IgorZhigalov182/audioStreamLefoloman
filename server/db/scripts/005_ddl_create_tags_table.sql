CREATE TABLE IF NOT EXISTS tags (
    id          serial      PRIMARY KEY,
    name        text        NOT NULL,
    image_path  text        NOT NULL
);