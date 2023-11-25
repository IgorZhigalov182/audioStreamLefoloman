CREATE TABLE IF NOT EXISTS messages (
    id          serial      PRIMARY KEY,
    text        text        NOT NULL,
    created_at  timestamp   NOT NULL,
    client_id   integer     NOT NULL,
    room_id     integer     NOT NULL    REFERENCES rooms(id) ON DELETE CASCADE
);