# 1. 현재 mysql에서 가지고 있는 데이터베이스 리스트 조회
show databases;
# 2. 내가 원하는 데이터베이스 생성
create database nodejs;
# 3. 내가 사용할 데이터베이스 선택 (중요! 툴을 껐다 킬때 마다 사용하겠다고 알려줘야 한다)
use nodejs;

# 테이블 생성
create table nodejs_member(
id varchar(100),
pw varchar(100),
nick varchar(100)
);

# 데이터를 삽입 -> 더미데이터
insert into nodejs_member values ('id1','pw1','nick1');

# 테이블 검색
select * from nodejs_member;

# 테이블 삭제
delete from nodejs_member where id = 'id1' and pw ='pw1';
delete from nodejs_member where id = 'smhrd' and pw ='123';

# 널 값 삭제
delete from nodejs_member where id is NULL;

# 테이블이 삭제 되지 않을 경우 세팅
set sql_safe_updates=0;

select * from nodejs_member;
