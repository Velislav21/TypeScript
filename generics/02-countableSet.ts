interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}
class CountedSet<T> implements CountableSet<T> {

    private items: Map<T, number> = new Map();

    add(item: T) {
        const currentCount = this.items.get(item);

        if (!currentCount) {
            this.items.set(item, 1)
        } else {
            this.items.set(item, currentCount + 1)
        }
    }
    remove(item: T) {
        const currentItem = this.items.get(item);

        if (currentItem && currentItem > 0) {
            this.items.delete(item);
        } else {
            return;
        }

    }
    contains(item: T): boolean {

        const currentItem = this.items.get(item);
        
        return currentItem && currentItem > 0 ? true : false;
    }
    getNumberOfCopies(item: T): number {

        const currentItem = this.items.get(item);

        return currentItem && currentItem > 0 ? currentItem : 0;
    }
}

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();

codesCounterSet.add(404);

codesCounterSet.add(200);

console.log(codesCounterSet.contains(404));

console.log(codesCounterSet.getNumberOfCopies(200));
