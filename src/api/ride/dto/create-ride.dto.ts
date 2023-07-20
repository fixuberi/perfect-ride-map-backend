export class CreateRideDto {
  startDate: string;
  endDate: string;
  rideHistory: RideLocation[];
}

export interface RidePoint {
  latitude: number;
  longitude: number;
  altitude?: number;
}

export interface RideLocation extends RidePoint {
  timestamp: number;
  speed: number;
}

export interface RideLocationWwithHeartRate extends RideLocation {
  heartRate: number | null;
}
