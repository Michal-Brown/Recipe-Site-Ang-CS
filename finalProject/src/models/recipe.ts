export class Recipe {
    constructor(
        public ID: string,
        public Name: string,
        public CategoryID: string,
        public PrepTime: number,
        public Difficulty: number,
        public Date: Date,
        public Ingredients: string[],
        public Directions: string[],
        public UserID: string,
        public Image: string
    ) { }
}