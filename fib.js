function memoizedFib(index, cache){
    cache = cache || [];
    
    //base case
    //determine if the index we are looking for has already been calculated and is inside our cache
    if (cache[index]){
        return cache[index];
    }
    
    else {
        if (index < 3){
            return 1;
        }
        
        else(cache[index] = memoizedFib(index - 1, cache) + memoizedFib(index - 2, cache));
    }
    
    return cache[index];
}

memoizedFib(50);