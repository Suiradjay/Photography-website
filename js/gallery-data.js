// Curated exhibition data. Each photo references a Google Drive file ID.
// IMPORTANT: For images to load, each Drive file must be shared as
// "Anyone with the link" (Viewer) in Google Drive.

const EXHIBITION = [
  {
    id: "portraits",
    title: "Portraits — Malissa",
    description: "An intimate portrait series exploring light, color, and mood.",
    photos: [
      { id: "1Whhg3-U94fB-Bv4BN0nlDzQYjx1Lpo2Q", caption: "Malissa, Study I" },
      { id: "1vRvKFVyegBdF8jQdIlAg0OeVzFn_bKq5", caption: "Malissa, Study II" },
      { id: "1JZiN1KFCX1O-w8BS48b2fXfsd4egFhI1", caption: "Malissa, Study III" },
      { id: "13y3mmdNZxCHgx7bIjlKBizvy45cQ-SgQ", caption: "Malissa, Study IV" },
      { id: "1Wg4E-CORbSUfGKvuMj1o0H5gFWb4r73E", caption: "Malissa, Study V" },
      { id: "1eFiaU4krLnLtr6RrWErTmTxgOduhTzA-", caption: "Malissa, Study VI" }
    ]
  },
  {
    id: "ahhside",
    title: "Golden Hour — Ahhside",
    description: "Warm tones and natural light from an outdoor session.",
    photos: [
      { id: "1QMgvLzzR7IAoDqSzU0uTQr13KH_Mz2va", caption: "Ahhside, Frame I" },
      { id: "17pN3j0hrDiQs5xpt2xcDsdDeJW6XZZI3", caption: "Ahhside, Frame II" },
      { id: "1zRCUVOB-iMVOOnodusjsWjX6XBhlDPqL", caption: "Ahhside, Frame III" },
      { id: "1il5n9DkzVYBXIRtsrEET9gh-NO_eYlsJ", caption: "Ahhside, Frame IV" },
      { id: "1RAnMTBhYOfE9dwtY02M9YQPeSxN-MXLB", caption: "Ahhside, Frame V" }
    ]
  },
  {
    id: "editorial",
    title: "Editorial — Arneisha",
    description: "Bold color and high-fashion editorial styling.",
    photos: [
      { id: "1OTcsAVtUTFDgEfhgxgkQvhCxOLRXfKZ6", caption: "Arneisha, Blue Feed" },
      { id: "1aicCpXDWmQCS8fh6SuraLmlgK-HK3HIM", caption: "Arneisha, Blue Story" },
      { id: "1ljs38N5o-lM3Lelf-B5-09Wk0DodRdhI", caption: "Arneisha, Feed" },
      { id: "1rHNV8VaTwdAbjaCvmxV50GBYTikCf22l", caption: "Arneisha, Story" },
      { id: "1KJtJBJGAcOcgq1NPEh4fdJPDXesmcvpz", caption: "Arneisha, Blue Story Variant" }
    ]
  },
  {
    id: "sports",
    title: "Action — Rockets",
    description: "Fast-paced sports photography frozen in motion.",
    photos: [
      { id: "1uJjGgl8h6A0mMmkT36oJcDLK2OJABpHq", caption: "Rockets, Play I" },
      { id: "156IxVKAc4K68AtIrakvqiMOcBqvXClxN", caption: "Rockets, Play II" },
      { id: "1WP42DlbOLlo1xDqhhvfLrlgJuBtFt8m3", caption: "Rockets, Play III" },
      { id: "1rz9b1yG1OKC4sG-8zFG6i8b-ogeQYdOb", caption: "Rockets, Play IV" }
    ]
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "Candid, vibrant lifestyle and fashion imagery.",
    photos: [
      { id: "1w0cEMuKiSKUEURo4EF9O_XTZQc3Ooc2W", caption: "Lifestyle, Frame I" },
      { id: "1saC7QNNUFrqWRWYw05a0RM8Ep24b5cHt", caption: "Lifestyle, Frame II" },
      { id: "1rFHxv1MaE4_P5CD4F9ii4jiNNOWDSAxq", caption: "Lifestyle, Frame III" },
      { id: "1Shk_dCffkWdm1hvtNANLcWhNoD087Anc", caption: "Lifestyle, Frame IV" },
      { id: "1-MssGarE1rqFC4W3bLoGEnfR2d-sb6xz", caption: "Lifestyle, Frame V" }
    ]
  }
];

// Builds a Google Drive direct-view image URL at a given pixel width.
function driveImageUrl(fileId, width) {
  return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`;
}
