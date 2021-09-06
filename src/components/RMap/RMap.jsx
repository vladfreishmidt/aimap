import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, ViewState, Source, Layer, StaticMap, Filter } from 'react-map-gl';

const ACCESS_TOKEN = 'pk.eyJ1IjoiYWltYXAiLCJhIjoiY2tzaXBsY3VmMGNkdjJvbmNpajd4bzNsdSJ9.ob9hYvyUocVZ343tQy2wSg';

const layerStyle = {
  id: 'point',
  type: 'circle',
  'paint': {
    'circle-radius': 4,
    'circle-color': "#F78D61",
    'circle-stroke-width': 2,
    'circle-stroke-color': "#fff"
  }
};

const titleStyle = {
  fontFamily: 'Montserrat, sans- serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.8rem',
  lineHeight: '2.4rem',
  letterSpacing: '0.002em',
  color: '#242731',
  marginTop: '10px'
}


const RMap = ({ currentMarkerLatLon, filterBarActive, currObj, setCurrObj, setCurrentObject, setFilterBarActive, setObjectDetailsActive, viewport, setViewport, selectedObjTypeFilters }) => {

  const mapRef = useRef();

  // Map State
  const [selected, setSelected] = useState(null);

  const [objects, setObjects] = useState(null);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);


  // Get features from vector tileset
  let features = null;
  let markers = null;
  let filteredObjects = null;


  const getObjectFromVectorTiles = () => {

    features = mapRef.current.queryRenderedFeatures();
    filteredObjects = features.filter(feature => feature.type === 'Feature' && feature.properties.lat);

    setObjects(filteredObjects);

  }
  // -------------


  const test = (e) => {
    const features = mapRef.current.queryRenderedFeatures(e.point, {
      layers: ['aimap-objects']
    });

    if (features.length) {
      const clickedPoint = features[0];

      setCurrObj(clickedPoint);

      // setObjectDetailsActive(true);
      // setFilterBarActive(true);

      // setCurrentObject(clickedPoint.properties.hash_id);
    } else {
      setCurrObj(false)
    }
  }
  // markers = useMemo(() => makeMarkers(), [objects]);

  let filterArray = ['in', 'aimap_classifier', ""];

  // filterArray.push("Гаражі, стоянки, СТО");

  filterArray = [...filterArray, ...selectedObjTypeFilters];

  // filterArray = filterArray.filter(obj => obj !== "Будинки житлові котеджного типу");

  const markerClickHandler = (e) => {
    const features = mapRef.current.queryRenderedFeatures(e.point, {
      layers: ['aimap-objects']
    });

    if (features.length) {
      const clickedPoint = features[0];

      setCurrObj(clickedPoint)
      setObjectDetailsActive(true);
      setFilterBarActive(true);

      setCurrentObject(clickedPoint.properties.hash_id);
    } else {
      setCurrObj(false)
    }
  }

  return (
    <div className={filterBarActive ? 'mapWrapper small' : 'mapWrapper'}>

      <ReactMapGL
        {...viewport}
        width="100%"
        height="100vh"
        mapboxApiAccessToken={ACCESS_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ref={instance => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        maxPitch={1}
        dragRotate={false}
        mapStyle={"mapbox://styles/aimap/ckt1m9fgy15du17o08mc8a11c"}
        onLoad={() => {
          getObjectFromVectorTiles();
          setMapIsLoaded(true);
        }
        }
        onHover={(e) => test(e)}
        onClick={(e) => markerClickHandler(e)}
      >
        <Source url="mapbox://aimap.aimap-objects-tileset-2" type="vector">
          <Layer
            source-layer={'aimap_objects'}
            {...layerStyle}
            filter={filterArray}
          />
        </Source>

        {objects && markers}

        <Marker offsetTop={-40} offsetLeft={-20} longitude={+currentMarkerLatLon.lon} latitude={+currentMarkerLatLon.lat} >
          <img src="http://localhost:3000/assets/icons/active-marker.svg" />
        </Marker>

        {currObj && <Popup
          latitude={+currObj.properties.lat}
          longitude={+currObj.properties.lon}

          onClose={() => setCurrObj(false)}
        >
          <div style={{ width: '440px', minHeight: '172px', padding: '12px', borderRadius: '8px' }}>
            <img src="http://localhost:3000/assets/icons/object-types/House.svg" />
            <h4 style={titleStyle} > {currObj.properties.name.length > 37 ? currObj.properties.name.slice(0, 34) + '..' : currObj.properties.name}</h4>
            <h4 className="popUpClassifier">{currObj.properties.aimap_classifier}</h4>
            <div className="construction_type">{currObj.properties.construction_type} &middot; CC {currObj.properties.consequence_class}</div>
            <div className="construction_type">✓ {currObj.properties.stage_documentation}</div>
          </div>
        </Popup>}
      </ReactMapGL>

    </div>
  );
}

export default RMap;