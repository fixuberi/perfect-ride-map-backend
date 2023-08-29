export class CreateRideDto {
  startDate: string;
  endDate: string;
  locations: RideLocation[];
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
