CREATE TABLE IF NOT EXISTS content (
    id          serial      PRIMARY KEY,
    name        text        NOT NULL,
    address     text        NOT NULL,
    room_id     integer     NOT NULL    REFERENCES rooms(id) ON DELETE CASCADE
);