var listaFilmes = [
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27194950.jpg%27&ImageUrl=%27194950.jpg%27&EntityType=%27Item%27&EntityId=%2713849%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540",
  "https://flxt.tmsimg.com/assets/p40_p_v10_ap.jpg",
  "https://picfiles.alphacoders.com/852/85257.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
