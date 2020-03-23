// Hacer ejercicios de artistas acá
// artistaConMasCopias, que devuelva el objeto artista que más copias de discos en total vendió


const artistaConMasCopias = artistas => {
    const aCantidadDeCopias = (acumulador, disco) => {
          
        acumulador += disco.copiasVendidas;
        
        return acumulador
    }
    
    const porMasCopiasVendidas = (artista1, artista2) => {
        const primerArtista = artista1.discos.reduce(aCantidadDeCopias, 0)
        const segundoArtista = artista2.discos.reduce(aCantidadDeCopias, 0)

        const artistaConMasVentas = primerArtista > segundoArtista ? artista1 : artista2;

        return artistaConMasVentas
    }
    return artistas.reduce(porMasCopiasVendidas)
}

console.log(artistaConMasCopias(artistas))