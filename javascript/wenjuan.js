function validatePhoneNumber(phoneNumber) {
    // 使用正则表达式来匹配手机号的格式
    var phonePattern = /^1\d{10}$/;
    
    if (phonePattern.test(phoneNumber)) {
        return true;  // 手机号格式正确
    } else {
        return false;  // 手机号格式不正确
    }
}


document.addEventListener("DOMContentLoaded",function(){
    var provincearr = ['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区','台湾省','香港特别行政区','澳门特别行政区'];

    var cityarr = [
        ['请选择城市','北京市'],
        ['请选择城市','天津市'],
        ['请选择城市','石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市'],
        ['请选择城市','太原市', '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '晋中市', '运城市', '忻州市', '临汾市', '吕梁市'],
        ['请选择城市','呼和浩特市', '包头市', '乌海市', '赤峰市', '通辽市', '鄂尔多斯市', '呼伦贝尔市', '巴彦淖尔市', '乌兰察布市', '兴安盟', '锡林郭勒盟', '阿拉善盟'],
        ['请选择城市','沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市', '丹东市', '锦州市', '营口市', '阜新市', '辽阳市', '盘锦市', '铁岭市', '朝阳市', '葫芦岛市'],
        ['请选择城市','长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市', '延边朝鲜族自治州'],
        ['请选择城市','哈尔滨市', '齐齐哈尔市', '鸡西市', '鹤岗市', '双鸭山市', '大庆市', '伊春市', '佳木斯市', '七台河市', '牡丹江市', '黑河市', '绥化市', '大兴安岭地区'],
        ['请选择城市','上海市'],
        ['请选择城市','南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'],
        ['请选择城市','杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        ['请选择城市','合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市', '宿州市', '六安市', '亳州市', '池州市', '宣城市'],
        ['请选择城市','福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市'],
        ['请选择城市','南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春市', '抚州市', '上饶市'],
        ['请选择城市','济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '济宁市', '泰安市', '威海市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '菏泽市'],
        ['请选择城市','郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '漯河市', '三门峡市', '南阳市', '商丘市', '信阳市', '周口市', '驻马店市', '济源市'],
        ['请选择城市','武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施土家族苗族自治州', '仙桃市', '潜江市', '天门市', '神农架林区'],
        ['请选择城市','长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市', '张家界市', '益阳市', '郴州市', '永州市', '怀化市', '娄底市', '湘西土家族苗族自治州'],
        ['请选择城市','广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市', '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'],
        ['请选择城市','南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市'],
        ['请选择城市','海口', '三亚', '三沙', '儋州', '琼海', '万宁', '东方', '五指山'],
        ['请选择城市','重庆市'],
        ['请选择城市','成都', '绵阳', '德阳', '攀枝花', '自贡', '泸州', '广元', '遂宁'],
        ['请选择城市','贵阳', '六盘水', '遵义', '安顺', '铜仁', '毕节', '兴义', '凯里'],
        ['请选择城市','昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧'],
        ['请选择城市','拉萨', '日喀则', '昌都', '林芝', '山南', '那曲', '阿里'],
        ['请选择城市','西安', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康'],
        ['请选择城市','兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉'],
        ['请选择城市','西宁', '海东', '海北', '黄南', '海南', '果洛', '玉树', '海西'],
        ['请选择城市','银川', '石嘴山', '吴忠', '固原', '中卫'],
        ['请选择城市','乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '昌吉', '博尔塔拉', '巴音郭楞', '阿克苏'],
        ['请选择城市','台北', '高雄', '台中', '花莲', '基隆', '嘉义', '新竹', '桃园'],
        ['请选择城市','香港'],
        ['请选择城市','澳门']
    ];
        
    function createOption(obj,data){
        if (data.length>0){
        for(var i in data){
            var op = new Option(data[i],i);
            obj.options.add(op);
        }  
        }
        
    }

    var shengfen = document.getElementById('province');
    createOption(shengfen,provincearr);

    var chengshi = document.getElementById('city');
    shengfen.onchange = function(){
        chengshi.options.length = 0;
        createOption(chengshi,cityarr[shengfen.value]);
        if(shengfen.value>=0)
            chengshi.onchange();
    }

    var YEAR = this.getElementById('birth-year')
    var endYear = 1950;
    var startYear = new Date().getFullYear(); 
        for (var year = startYear; year >= endYear; year--) {
            var year1 = new Option(year,year);
            YEAR.options.add(year1);
        }

    var MONTH = this.getElementById('birth-month')
    var startMonth = 1;
        for (var month = startMonth; month <= 12; month++) {
            var month1 = new Option(month,month);
            MONTH.options.add(month1);
        }        

    var DAY = document.getElementById('birth-day')
    var startDay = 1;
    var nian = document.getElementById('birth-year');
    var yue = document.getElementById('birth-month');

    nian.addEventListener('change',function(){
        yue.addEventListener('change',function(){
            if((nian.value % 4 === 0 && nian.value % 100 !== 0) || nian.value % 400 === 0){
                console.log(nian.value);
                switch(yue.value){
                    case '2':
                        var endday = 29;
                        break;
                    case '4':
                    case '6':
                    case '9':
                    case '11':
                        var endday = 30;
                        break;
                    default:
                        var endday = 31;
                }
                DAY.options.length=1;
                for(var day=startDay;day<=endday;day++){
                    var day1 = new Option(day,day);                    
                    DAY.options.add(day1);
                }
            }
            else{
                switch(yue.value){
                    case '2':
                        var endday = 28;
                        console.log(endday);
                        break;
                    case '4':
                    case '6':
                    case '9':
                    case '11':
                        var endday = 30;
                        break;
                    default:
                        var endday = 31;
                }
                DAY.options.length=1;
                for(var day=startDay;day<=endday;day++){
                    var day1 = new Option(day,day);    
                    DAY.options.add(day1);
                }
            }
        })    
        
    })
})

function autoFillEmail(){
    var emailInput = document.getElementById('email');
    var emailTypeSelect = document.getElementById('emailtype');
    var selectedOption = emailTypeSelect.options[emailTypeSelect.selectedIndex].value;

    if (selectedOption !== "") {
        emailInput.value = emailInput.value.split('@')[0] + '@' + selectedOption + '.com';
        if (selectedOption==-1)
            emailInput.value='';
    }
}



// 在提交表单时调用该函数进行验证
function handleSubmit() {
    event.preventDefault(); // 阻止表单的默认提交行为
    var phoneNumber = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById('phone').value;
    var xueli = document.getElementById('xueli').value;
    
    var hobby1 = document.getElementById('1').value;
    var hobby2 = document.getElementById('2').value;
    var hobby3 = document.getElementById('3').value;
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // 这里是一个假设的用户名和密码
    var validUsername = "wjbbbbb";
    var validPassword = "123456";


    var pp=document.getElementById('province').value;

    var cc=document.getElementById('city').value;



    

    if (!name || !gender || !phone || !xueli || !shengfen || (!hobby1 && !hobby2 && !hobby3)||(pp==-1)||(cc==-1)) {
        alert('请填写完整的信息！');
        return false; // 阻止提交
        }
    
    if (username === validUsername && password === validPassword) {
        if (validatePhoneNumber(phoneNumber)) {
            alert('提交成功');
            return true; // 允许提交
            } 
        else {
            alert('请输入正确的手机号');
            // 阻止表单提交或者执行其他操作
        }        
    }  
    else {
        alert('用户名或密码不正确！');
        return false; // 阻止提交
    }


}
