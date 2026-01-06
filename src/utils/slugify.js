function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Menghapus karakter yang bukan huruf, angka, atau spasi
    .replace(/\s+/g, "-") // Mengganti spasi dengan tanda '-'
    .replace(/-+/g, "-"); // Menghapus tanda '-' berlebihan
}

export default slugify;
