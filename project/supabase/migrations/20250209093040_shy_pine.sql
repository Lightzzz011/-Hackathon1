/*
  # Add sample data for testing

  1. Sample Data
    - Adds test locations
    - Adds test parking slots
  2. Notes
    - All data is for testing purposes
    - Prices are in USD
*/

-- Insert sample locations
INSERT INTO locations (name, address) VALUES
  ('Downtown Parking', '123 Main St, Downtown'),
  ('Shopping Mall Parking', '456 Market Ave, Shopping District'),
  ('Airport Parking', '789 Airport Rd, Terminal Area');

-- Insert sample parking slots
INSERT INTO parking_slots (location_id, level, number, price_per_hour) 
SELECT 
  l.id,
  level_num,
  slot_num,
  CASE 
    WHEN l.name LIKE '%Downtown%' THEN 5.00
    WHEN l.name LIKE '%Mall%' THEN 3.50
    ELSE 4.00
  END as price_per_hour
FROM locations l
CROSS JOIN (VALUES ('A'), ('B'), ('C')) AS levels(level_num)
CROSS JOIN (VALUES ('01'), ('02'), ('03'), ('04'), ('05')) AS slots(slot_num)
WHERE l.name IN ('Downtown Parking', 'Shopping Mall Parking', 'Airport Parking');