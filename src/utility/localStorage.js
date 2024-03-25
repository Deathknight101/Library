import { Toaster, toast } from 'sonner'
const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('saved-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}
const getStoredWishlistBooks = () => {
    const storedBooks = localStorage.getItem('wishlist-books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = id => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('saved-books', JSON.stringify(storedBooks))
        toast.success('Added to Read');
    } else {
        toast.error('Already added')
    }
}

const saveBooksWishlist = id => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    const wishlistStoredBooks = getStoredWishlistBooks();
    if (!exists) {
        const exist = wishlistStoredBooks.find(bookId => bookId === id);
        if (exist) {
            toast.error('Already added to Wishlist')
        }
        else {
            wishlistStoredBooks.push(id);
            localStorage.setItem('wishlist-books', JSON.stringify(wishlistStoredBooks))
            toast.success('Added to Wishlist');
        }


    } else {
        toast.error('Book Already Read')
    }
}

export { saveBooks, getStoredBooks, saveBooksWishlist, getStoredWishlistBooks }