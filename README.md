### Libraries
- Router: react-router-dom (npm i react-router-dom)
- API: axios (npm i axios)
- Redux: reduxjs/toolkit,react-redux (npm install @reduxjs/toolkit) (npm i react-redux)


### Project structure
* src
    - components/
        - Chứa các presentational components: Header, Sidebar, Button , Card ,...
        - Các components này thường chỉ thuần về render UI, không chứa các logic ứng dụng: API,...
    
    - pages/
        - Chứa các container components: Home, MovieDetails, Checkout,...
        - Các Component này sẽ đại diện cho 1 page hoặc 1 tập hợn 1 chức năng của thể của ứng dụng, => 
        - Các components này sẽ chứa các logic của ứng dụng: API, logic, API , ...

    - template/
        - Chứa các component layout
    
    - services
        - Setup thành phần call API (axios)
        - Chứa các hàm gọi API