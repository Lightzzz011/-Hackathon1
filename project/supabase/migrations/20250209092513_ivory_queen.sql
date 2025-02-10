/*
  # Parking System Database Schema

  1. New Tables
    - locations
      - id (uuid, primary key)
      - name (text)
      - address (text)
      - created_at (timestamp)
    
    - parking_slots
      - id (uuid, primary key)
      - location_id (uuid, foreign key)
      - level (text)
      - number (text)
      - price_per_hour (numeric)
      - is_available (boolean)
      - created_at (timestamp)
    
    - bookings
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - slot_id (uuid, foreign key)
      - start_time (timestamp)
      - end_time (timestamp)
      - total_price (numeric)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create locations table
CREATE TABLE locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create parking_slots table
CREATE TABLE parking_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id) ON DELETE CASCADE,
  level text NOT NULL,
  number text NOT NULL,
  price_per_hour numeric NOT NULL CHECK (price_per_hour > 0),
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(location_id, level, number)
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  slot_id uuid REFERENCES parking_slots(id) ON DELETE CASCADE,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  total_price numeric NOT NULL CHECK (total_price >= 0),
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  CHECK (end_time > start_time)
);

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE parking_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for locations
CREATE POLICY "Anyone can view locations"
  ON locations
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for parking_slots
CREATE POLICY "Anyone can view parking slots"
  ON parking_slots
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);