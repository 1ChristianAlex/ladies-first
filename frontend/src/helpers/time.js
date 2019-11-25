import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export const distanceDate = (stringDate = "") => {
  try {
    return formatDistance(new Date(stringDate), new Date(), { locale: ptBR });
  } catch (error) {
    console.log("Date parsing error: ", stringDate);
    return "";
  }
};
