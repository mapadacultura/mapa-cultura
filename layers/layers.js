var wms_layers = [];


        var lyr_BASEOSM_0 = new ol.layer.Tile({
            'title': 'BASE OSM',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TEATRO_1 = new ol.format.GeoJSON();
var features_TEATRO_1 = format_TEATRO_1.readFeatures(json_TEATRO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEATRO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEATRO_1.addFeatures(features_TEATRO_1);cluster_TEATRO_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TEATRO_1
});
var lyr_TEATRO_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TEATRO_1, 
                style: style_TEATRO_1,
                popuplayertitle: "TEATRO",
                interactive: true,
                title: '<img src="styles/legend/TEATRO_1.png" /> TEATRO'
            });
var format_MSICA_2 = new ol.format.GeoJSON();
var features_MSICA_2 = format_MSICA_2.readFeatures(json_MSICA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSICA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSICA_2.addFeatures(features_MSICA_2);cluster_MSICA_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MSICA_2
});
var lyr_MSICA_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MSICA_2, 
                style: style_MSICA_2,
                popuplayertitle: "MÚSICA",
                interactive: true,
                title: '<img src="styles/legend/MSICA_2.png" /> MÚSICA'
            });
var format_ESPAOARTEECULTURA_3 = new ol.format.GeoJSON();
var features_ESPAOARTEECULTURA_3 = format_ESPAOARTEECULTURA_3.readFeatures(json_ESPAOARTEECULTURA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPAOARTEECULTURA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPAOARTEECULTURA_3.addFeatures(features_ESPAOARTEECULTURA_3);cluster_ESPAOARTEECULTURA_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ESPAOARTEECULTURA_3
});
var lyr_ESPAOARTEECULTURA_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ESPAOARTEECULTURA_3, 
                style: style_ESPAOARTEECULTURA_3,
                popuplayertitle: "ESPAÇO ARTE E CULTURA",
                interactive: true,
                title: '<img src="styles/legend/ESPAOARTEECULTURA_3.png" /> ESPAÇO ARTE E CULTURA'
            });
var format_ECONOMIACRIATIVA_4 = new ol.format.GeoJSON();
var features_ECONOMIACRIATIVA_4 = format_ECONOMIACRIATIVA_4.readFeatures(json_ECONOMIACRIATIVA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECONOMIACRIATIVA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECONOMIACRIATIVA_4.addFeatures(features_ECONOMIACRIATIVA_4);cluster_ECONOMIACRIATIVA_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ECONOMIACRIATIVA_4
});
var lyr_ECONOMIACRIATIVA_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ECONOMIACRIATIVA_4, 
                style: style_ECONOMIACRIATIVA_4,
                popuplayertitle: "ECONOMIA CRIATIVA",
                interactive: true,
                title: '<img src="styles/legend/ECONOMIACRIATIVA_4.png" /> ECONOMIA CRIATIVA'
            });
var format_DANA_5 = new ol.format.GeoJSON();
var features_DANA_5 = format_DANA_5.readFeatures(json_DANA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANA_5.addFeatures(features_DANA_5);cluster_DANA_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_DANA_5
});
var lyr_DANA_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DANA_5, 
                style: style_DANA_5,
                popuplayertitle: "DANÇA",
                interactive: true,
                title: '<img src="styles/legend/DANA_5.png" /> DANÇA'
            });
var format_CULTURATRADICIONALISTA_6 = new ol.format.GeoJSON();
var features_CULTURATRADICIONALISTA_6 = format_CULTURATRADICIONALISTA_6.readFeatures(json_CULTURATRADICIONALISTA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULTURATRADICIONALISTA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURATRADICIONALISTA_6.addFeatures(features_CULTURATRADICIONALISTA_6);cluster_CULTURATRADICIONALISTA_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CULTURATRADICIONALISTA_6
});
var lyr_CULTURATRADICIONALISTA_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CULTURATRADICIONALISTA_6, 
                style: style_CULTURATRADICIONALISTA_6,
                popuplayertitle: "CULTURA TRADICIONALISTA",
                interactive: true,
                title: '<img src="styles/legend/CULTURATRADICIONALISTA_6.png" /> CULTURA TRADICIONALISTA'
            });
var format_CULTURAIDENTITRIA_7 = new ol.format.GeoJSON();
var features_CULTURAIDENTITRIA_7 = format_CULTURAIDENTITRIA_7.readFeatures(json_CULTURAIDENTITRIA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULTURAIDENTITRIA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURAIDENTITRIA_7.addFeatures(features_CULTURAIDENTITRIA_7);cluster_CULTURAIDENTITRIA_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CULTURAIDENTITRIA_7
});
var lyr_CULTURAIDENTITRIA_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CULTURAIDENTITRIA_7, 
                style: style_CULTURAIDENTITRIA_7,
                popuplayertitle: "CULTURA IDENTITÁRIA",
                interactive: true,
                title: '<img src="styles/legend/CULTURAIDENTITRIA_7.png" /> CULTURA IDENTITÁRIA'
            });
var format_CARNAVAL_8 = new ol.format.GeoJSON();
var features_CARNAVAL_8 = format_CARNAVAL_8.readFeatures(json_CARNAVAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARNAVAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARNAVAL_8.addFeatures(features_CARNAVAL_8);cluster_CARNAVAL_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CARNAVAL_8
});
var lyr_CARNAVAL_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CARNAVAL_8, 
                style: style_CARNAVAL_8,
                popuplayertitle: "CARNAVAL",
                interactive: true,
                title: '<img src="styles/legend/CARNAVAL_8.png" /> CARNAVAL'
            });
var format_AUDIOVISUAL_9 = new ol.format.GeoJSON();
var features_AUDIOVISUAL_9 = format_AUDIOVISUAL_9.readFeatures(json_AUDIOVISUAL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDIOVISUAL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDIOVISUAL_9.addFeatures(features_AUDIOVISUAL_9);cluster_AUDIOVISUAL_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AUDIOVISUAL_9
});
var lyr_AUDIOVISUAL_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AUDIOVISUAL_9, 
                style: style_AUDIOVISUAL_9,
                popuplayertitle: "AUDIOVISUAL",
                interactive: true,
                title: '<img src="styles/legend/AUDIOVISUAL_9.png" /> AUDIOVISUAL'
            });
var format_ARTESANATO_10 = new ol.format.GeoJSON();
var features_ARTESANATO_10 = format_ARTESANATO_10.readFeatures(json_ARTESANATO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARTESANATO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESANATO_10.addFeatures(features_ARTESANATO_10);cluster_ARTESANATO_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ARTESANATO_10
});
var lyr_ARTESANATO_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ARTESANATO_10, 
                style: style_ARTESANATO_10,
                popuplayertitle: "ARTESANATO",
                interactive: true,
                title: '<img src="styles/legend/ARTESANATO_10.png" /> ARTESANATO'
            });
var format_ARTESVISUAIS_11 = new ol.format.GeoJSON();
var features_ARTESVISUAIS_11 = format_ARTESVISUAIS_11.readFeatures(json_ARTESVISUAIS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARTESVISUAIS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESVISUAIS_11.addFeatures(features_ARTESVISUAIS_11);cluster_ARTESVISUAIS_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ARTESVISUAIS_11
});
var lyr_ARTESVISUAIS_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ARTESVISUAIS_11, 
                style: style_ARTESVISUAIS_11,
                popuplayertitle: "ARTES VISUAIS",
                interactive: true,
                title: '<img src="styles/legend/ARTESVISUAIS_11.png" /> ARTES VISUAIS'
            });
var format_ARTESCNICAS_12 = new ol.format.GeoJSON();
var features_ARTESCNICAS_12 = format_ARTESCNICAS_12.readFeatures(json_ARTESCNICAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARTESCNICAS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESCNICAS_12.addFeatures(features_ARTESCNICAS_12);cluster_ARTESCNICAS_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ARTESCNICAS_12
});
var lyr_ARTESCNICAS_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ARTESCNICAS_12, 
                style: style_ARTESCNICAS_12,
                popuplayertitle: "ARTES CÊNICAS",
                interactive: true,
                title: '<img src="styles/legend/ARTESCNICAS_12.png" /> ARTES CÊNICAS'
            });

lyr_BASEOSM_0.setVisible(true);lyr_TEATRO_1.setVisible(true);lyr_MSICA_2.setVisible(true);lyr_ESPAOARTEECULTURA_3.setVisible(true);lyr_ECONOMIACRIATIVA_4.setVisible(true);lyr_DANA_5.setVisible(true);lyr_CULTURATRADICIONALISTA_6.setVisible(true);lyr_CULTURAIDENTITRIA_7.setVisible(true);lyr_CARNAVAL_8.setVisible(true);lyr_AUDIOVISUAL_9.setVisible(true);lyr_ARTESANATO_10.setVisible(true);lyr_ARTESVISUAIS_11.setVisible(true);lyr_ARTESCNICAS_12.setVisible(true);
var layersList = [lyr_BASEOSM_0,lyr_TEATRO_1,lyr_MSICA_2,lyr_ESPAOARTEECULTURA_3,lyr_ECONOMIACRIATIVA_4,lyr_DANA_5,lyr_CULTURATRADICIONALISTA_6,lyr_CULTURAIDENTITRIA_7,lyr_CARNAVAL_8,lyr_AUDIOVISUAL_9,lyr_ARTESANATO_10,lyr_ARTESVISUAIS_11,lyr_ARTESCNICAS_12];
lyr_TEATRO_1.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', });
lyr_MSICA_2.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_ESPAOARTEECULTURA_3.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_ECONOMIACRIATIVA_4.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_DANA_5.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_CULTURATRADICIONALISTA_6.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_CULTURAIDENTITRIA_7.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_CARNAVAL_8.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_AUDIOVISUAL_9.set('fieldAliases', {'LAT': 'LAT', 'LONG': 'LONG', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_ARTESANATO_10.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_ARTESVISUAIS_11.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_ARTESCNICAS_12.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃ': 'DESCRIÇÃ', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE A': 'ÁREA DE A', 'REDES SOCI': 'REDES SOCI', 'FOTO OU LO': 'FOTO OU LO', });
lyr_TEATRO_1.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', });
lyr_MSICA_2.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_ESPAOARTEECULTURA_3.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_ECONOMIACRIATIVA_4.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_DANA_5.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_CULTURATRADICIONALISTA_6.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_CULTURAIDENTITRIA_7.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_CARNAVAL_8.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_AUDIOVISUAL_9.set('fieldImages', {'LAT': 'TextEdit', 'LONG': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_ARTESANATO_10.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_ARTESVISUAIS_11.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_ARTESCNICAS_12.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃ': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE A': 'TextEdit', 'REDES SOCI': 'TextEdit', 'FOTO OU LO': 'TextEdit', });
lyr_TEATRO_1.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', });
lyr_MSICA_2.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ESPAOARTEECULTURA_3.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ECONOMIACRIATIVA_4.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_DANA_5.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_CULTURATRADICIONALISTA_6.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_CULTURAIDENTITRIA_7.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_CARNAVAL_8.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_AUDIOVISUAL_9.set('fieldLabels', {'LAT': 'hidden field', 'LONG': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ARTESANATO_10.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ARTESVISUAIS_11.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ARTESCNICAS_12.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃ': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE A': 'no label', 'REDES SOCI': 'no label', 'FOTO OU LO': 'no label', });
lyr_ARTESCNICAS_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});