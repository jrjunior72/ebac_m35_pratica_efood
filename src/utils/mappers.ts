import { ApiRestaurant } from "../services/api";
import { Restaurant } from "../types";

// src/utils/mappers.ts
export const mapApiRestaurantToLocal = (apiData: ApiRestaurant): Restaurant => ({
  id: apiData.id,
  name: apiData.titulo,
  description: apiData.descricao,
  cover: apiData.capa,
  image: apiData.capa,
  category: apiData.tipo,
  rating: apiData.avaliacao,
  highlighted: apiData.destacado,
  dishes: apiData.cardapio?.map(item => ({
    id: item.id,
    name: item.nome,
    description: item.descricao,
    price: item.preco,
    photo: item.foto,
    servingSize: item.porcao
  })) || [] // Fallback para array vazio se cardapio for undefined
})
