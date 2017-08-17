# react-jsonapi
Components for working with JSONAPI formatted JSON

## Components

### `JSON`
Provides access to the root level JSON object.

#### usage
```js
// display formatted JSON response
<JSON />

// use json in children render function
<JSON>
  {json => <div>{json.someField.property}</div>}
</JSON>
```


### `Data`
Provides access to the `data` field.

#### usage
```js
// display formatted json.data field
<Data />

// use json.data in children render function
<Data>
  {data => <div>{data.someProperty}</div>}
</Data>
```


### `Included`
Provides access to the `included` field.

#### usage
```js
// display formatted json.included field
<Included />

// use json.included in children render function
<Included>
  {included => <div>{included.someProperty}</div>}
</Included>
```


### `Links`
Provides access to the `links` field.

#### usage
```js
// display formatted json.links field
<Links />

// use json.links in children render function
<Links>
  {links => <div>{links.someProperty}</div>}
</Links>
```


### `Meta`
Provides access to the `meta` field.

#### usage
```js
// display formatted json.meta field
<Meta />

// use json.meta in children render function
<Meta>
  {meta => <div>{meta.someProperty}</div>}
</Meta>
```


### `Errors`
Provides access to the `errors` field.

#### usage
```js
// display formatted json.errors field
<Errors />

// use json.errors in children render function
<Errors>
  {errors => <div>{errors.someProperty}</div>}
</Errors>
```

### `Idx`
This is the generic component that all the other components use.

You can supply the name of the field you'd like, as makes sens with your API.

#### Usage
```js
<Idx idx="someField" />
```

## LICENSE
MIT

Copyright &copy; 2017 Michael Chan
