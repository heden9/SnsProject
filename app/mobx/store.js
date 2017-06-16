import { observable,action,computed } from 'mobx';

class Store {
    @observable localMyCollect = new Map();
    @observable TabHeight = 50;
    @observable UpdateFlag = false;
    // @observable wait = false;
    // @action modeScreen(){
    //     console.log('enter success');
    //     this.wait = true;
    // }
    // @action prepareScreen(){
    //     console.log('prepare enter');
    //     this.wait = false;
    // }
    @action changeCollect(data, state){
        if(data == null)
            return;
        if(state === true){
            data.isCollected = true;
            this.localMyCollect.set(data.query, data);
        }else if(state === false){
            this.localMyCollect.delete(data.query);
        }else{
            console.warn('err state!');
            return;
        }
        this.UpdateFlag = !this.UpdateFlag;
        this.saveCollect();
    }
    @action loadCollect(data){
        for(let key in data){
            this.localMyCollect.set(key, data[key]);
        }
    }
    checkIsCollect(data){
        return this.localMyCollect.has(data);
    }
    loadLocalInfo(){
        STORAGE.load({
            key: 'USER'
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            if(ret == null)
                return;
            this.loadCollect(ret);
        }).catch(err => {
            // 如果没有找到数据且没有sync方法，
            // 或者有其他异常，则在catch中返回
            console.log(err.message);
        })
    }
    saveCollect(){
        STORAGE.save({
            key: 'USER',  // 注意:请不要在key中使用_下划线符号!
            data: this.localMyCollect,

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: 1000 * 3600
        });
    }
    @action hideTab(){
        this.TabHeight = 0;
    }
    @action showTab(){
        this.TabHeight = 50;
    }
}
const UserInfo = new Store();
export default UserInfo;