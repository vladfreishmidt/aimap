export const mapLayer = (filterQuery) => {
   return (
      {
         'id': 'newLayer',
         'source': 'test-tileset2',
         'type': 'circle',
         'source-layer': 'test_tileset',
         'paint': {
            'circle-radius': 5,
            'circle-color': "#F78D61",
            'circle-stroke-width': 2,
            'circle-stroke-color': "#fff"
         },
         filter: ['all',
            ['in', 'aimap_classifier', filterQuery]
         ]
      }
   )
}

