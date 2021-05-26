
// Callback Hell example
class UserStorage {
    // id pw로 로그인을 하는 성공하면 1 실패하면 2를 프린터한다.
    loginUser(id, pw, onSuccess, onError){
        setTimeout( ()=>{
            if( (id === 'ellie' && pw === 'dream') || (id === 'color' && pw === 'academy') ){
                onSuccess(id);
            }
            else{
                console.log('not found ---');
                onError( new Error('not found') );
            }
        }, 2000);
    }

    // user를 주면서 사용자의 역할를 받아오는 함수
    getRoles(user, onSuccess, onError){
        setTimeout( ()=>{
            if( user === 'ellie' ){
                console.log('get role sunnces')
                onSuccess( {name:'ellie', role:'admin'} );
            }
            else {
                console.log('no access');
                onError( new Error('no access') );
            }
        }, 2000);
    }
}

const userStorage = new UserStorage();

//사용자로부터 id를 받아온다.
// const id = prompt('enter your id');
// const pw = prompt('enter your password');
id = 'ellie';
pw = 'dream';

//userStorage.loginUser(id, pw, (user)=>{ console.log(user) }, (error)=>{});
//console.log('aaaa')

id = 'ellie';
pw = 'dream2';
userStorage.loginUser(id, pw, 
    (user)=>{ 
        console.log(user);
        userStorage.getRoles(user, (user)=>{console.log('call m__')}, (error)=>{console.log('call error_m')});
    }, 
    (error)=>{ 
        console.log(error);
    }
);


