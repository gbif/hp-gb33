var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d0628d',
    fontSize: '16px'
  }
});

var siteConfig = {
  maps: {
    defaultMapStyle: 'NATURAL', // what is the default style
  },
  routes: {
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/biodiversity-of-oslo`,
      isHref: true,
      route: '/biodiversity-of-oslo' // the route you are currently using for occurrence search
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "gadmGid",
          "value": "NOR.12.1_1"
        },
        {
          "type": "equals",
          "key": "occurrenceStatus",
          "value": "PRESENT"
        },
      ]
    },
    highlightedFilters: ['taxonKey', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey'],
    excludedFilters: ['occurrenceStatus'],
    mapSettings: {
      zoom: 11.44771,
      lng: 10.7672051950574,
      lat: 59.95017
    }
  }
};
