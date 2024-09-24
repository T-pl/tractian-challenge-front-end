export interface Asset {
  name: string;
  id: string;
  locationId: string | null;
  parentId: string | null;
  sensorType: string;
  status: string;
}
