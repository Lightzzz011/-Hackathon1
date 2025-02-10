export interface Location {
  id: string;
  name: string;
  address: string;
  created_at: string;
}

export interface ParkingSlot {
  id: string;
  location_id: string;
  level: string;
  number: string;
  price_per_hour: number;
  is_available: boolean;
  created_at: string;
}

export interface Booking {
  id: string;
  user_id: string;
  slot_id: string;
  start_time: string;
  end_time: string;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}