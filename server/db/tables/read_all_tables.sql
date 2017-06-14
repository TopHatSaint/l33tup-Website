SELECT * , facts.fact_id
FROM ideas
LEFT JOIN facts ON ideas.fact_id = facts.fact_id
