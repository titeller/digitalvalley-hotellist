export interface IHotel {
  id: string;
  name: string;
  score: number;
  main_photo: string;
  price: number;
  policy: {
    breakfast_included: boolean;
    free_cancellation: boolean;
  }
}