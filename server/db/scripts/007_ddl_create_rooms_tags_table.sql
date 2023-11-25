CREATE TABLE IF NOT EXISTS rooms_tags (
    id          serial      PRIMARY KEY,
    room_id     integer     NOT NULL    REFERENCES rooms(id),
    tag_id      integer     NOT NULL    REFERENCES tags(id)
);