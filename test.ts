interface HashMapInterface<K, V> {
    add(key: K, value: V): void;
    remove(key: K): void;
    get(key: K): V;
    has(key: K): boolean;
    list(): V[];
}


class HashMap<K, V> implements HashMapInterface<K, V> {
    private map: any = {};
    add(key: K, value: V): void {
        this.map[key] = value;
    }
    remove(key: K): void {
        delete this.map[key];
    }
    get(key: K): V {
        return this.map[key];
    }
    has(key: K): boolean {
        return this.map.hasOwnProperty(key);
    }
    list(): V[] {
        return { ...this.map };
    }
}

const hashMap = new HashMap<string, string>();
hashMap.add('a', '1');
hashMap.add('b', '2');
hashMap.add('c', '3');
hashMap.add('d', '4');
hashMap.add('e', '5');


class NewPromise {
    all(promises: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            let count = 0;
            let results: any[] = [];
            promises.forEach((promise, index) => {
                promise.then((result) => {
                    count++;
                    results[index] = result;
                    if (count === promises.length) {
                        resolve(results);
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }
} 


const promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const api = 'https://api.github.com/users/octocat';
            fetch(api).then((response) => {
                return response.json();
            }).then((data) => {
                resolve(data);
            }
            ).catch((err) => {
                reject(err);
            });
        }, 1000);
    }
    ),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b');
        }, 2000);
    }
    ),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('c');
        }, 3000);
    }
    ),
]


const newPromises = new NewPromise();

newPromises.all(promises).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
