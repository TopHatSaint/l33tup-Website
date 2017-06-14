update ideas
  SET
    title = COALESCE($2, title),
    idea = COALESCE($3, idea)
WHERE id = $1
RETURNING *;
