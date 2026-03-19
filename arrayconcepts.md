🔹 Array
const arr = [1, 2, 3]
👉 Definition:

# An array is an ordered list of values where each item has an index.

🔹 Object
const user = { name: "Sagar", age: 30 }
👉 Definition:

# An object is a collection of key-value pairs.

🔹 map()
👉 Definition:

# Transforms every item → returns a new array

    arr.map(x => x * 2)

🔹 filter()
👉 Definition:

# Selects items based on condition

    arr.filter(x => x > 5)

🔹 reduce()
👉 Definition:

# Converts array → single value (object, number, etc.)

    arr.reduce((acc, curr) => ..., initial)

🔹 find()

# 👉 Returns first matching element

    arr.find(x => x.id === 1)

🔹 some()

# 👉 Returns true if any match

    arr.some(x => x > 10)

🔹 every()

# 👉 Returns true if all match

    arr.every(x => x > 0)

🔹 Set

# 👉 Removes duplicates

    [...new Set(arr)]

🔹 Record (TypeScript)

# Record<string, number>

# 👉 Means:

# key = string

# value = number

### PART 2 — MUST-KNOW PATTERNS

- These patterns are used again and again in frontend, backend, APIs, dashboards, tables, forms, etc.

# - Grouping = make buckets

# - Counting = count buckets

# - Lookup = index by key

# - Transform = change shape

# - Filter + Map = select then change

# - Flatten = open nested arrays

# - Unique = remove duplicates
