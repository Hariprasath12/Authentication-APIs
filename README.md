




# Authentication-APIs

APIs for Authentication

## Getting Started
Before runing a program.
* create a db with the name data and run database query(database.txt) to craete a table.
* Go to index.js file config emailid and password to send a email for forget password.


### Prerequisites


```
Node JS
MYSQL
```

### Installing



```
git clone https://github.com/Hariprasath12/Authentication-APIs.git
npm install
node start
```
## Document

APIs detais:

* localhost:3000/api/register
```
{
"name":"hari",
"email":"hariprasath1295@gmail.com",
"password":"1234567"
}
```

* localhost:3000/api/login
```
{

"email":"hariprasath1295@gmail.com",
"password":"123567"
}
```

* localhost:3000/api/forget/:hariprasath.1295@gmail.com

## Authors

* **Hari prasath* - *Initial work* - [PurpleBooth](https://github.com/Haripasath12)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
