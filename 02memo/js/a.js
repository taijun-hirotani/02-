
    let y = ""; //例) y += '<option value="'+i+'">'+i+'</option>';
    const yy = new Date();//日付取得可能
    const yyyy = yy.getFullYear()+1;//現在年取得 +1があると便利 毎年更新不要
    for(let i=1950; i<=yyyy; i++){
        y += '<option>'+i+'</option>';
    }
    $("#year").html(y);
    //月:1~12
    let m = "";
    for(let i=1; i<=12; i++){
        m += '<option>'+i+'</option>';
    }
    $("#month").html(m);
    //日:1~31
    let d = "";
    for(let i=1; i<=31; i++){
        d += '<option>'+i+'</option>';
    }
    $("#day").html(d);
    
    
    //save　クリックイベント
    $("#save").on("click",function(f){
        if($('#name').val() === ''){
            alert('名前を入力してください！');
            $('#name').focus();
            return false;
        }
        if($('#capital').val() === ''){
            alert('都道府県を入力してください！');
            $('#capital').focus();
            return false;
        }
        if($('#city').val() === ''){
            alert('市区町村を入力してください！');
            $('#city').focus();
            return false;
        }
        if($('#town').val() === ''){
            alert('地名地番を入力してください！');
            $('#town').focus();
            return false;
        }
        if($('#tel').val() === ''){
            alert('電話番号を入力してください！');
            $('#tel').focus();
            return false;
        }
        if($('#company').val() === ''){
            alert('勤務先を入力してください！');
            $('#company').focus();
            return false;
        }
        if($('#job').val() === ''){
            alert('職種を入力してください！');
            $('#job').focus();
            return false;
        }
        if($('#jobyears').val() === ''){
            alert('勤続年数を入力してください！');
            $('#jobyears').focus();
            return false;
        }
        if($('#income').val() === ''){
            alert('年収を入力してください！');
            $('#income').focus();
            return false;
        }
        alert('全ての条件をクリアしました');
    
        const name = $("#name").val();
        const year = $("#year").val();
        const month = $("#month").val();
        const day = $("#day").val();
        const capital = $("#capital").val();
        const city = $("#city").val();
        const town = $("#town").val();
        const tel = $("#tel").val();
        const company = $("#company").val();
        const job = $("#job").val();
        const jobyears = $("#jobyears").val();
        const income = $("#income").val();
        localStorage.setItem(name,year,month,day,capital,city,town,tel,company,job,jobyears,income);
        const html = 
        '<p>'+name+'</p><p>'
        +year+'</p><p>'
        +month+'</p><p>'
        +day+'</p><p>'
        +capital+'</p><p>'
        +city+'</p><p>'
        +town+'</p><p>'
        +tel+'</p><p>'
        +company+'</p><p>'
        +job+'</p><p>'
        +jobyears+'</p><p>'
        +income+'</p><p>';
        $("#formlist").append(html);
        
        console.log(f);
    });


    //未入力アラート　正常作動
    /*$(function(){
        $('#save').on('click',function(){
            if($('#name').val() === ''){
                alert('名前を入力してください！');
                $('#name').focus();
                return false;
            }
            if($('#tel').val() === ''){
                alert('電話番号を入力してください！');
                $('#tel').focus();
                return false;
            }
            alert('送信完了！');
        });
    });*/
    
    //2.clear クリックイベント
    $("#delete").on("click",function(){
        localStorage.clear();
        $("#formlist").empty();
    });
    
    
    for(let i=0; i<localStorage.length; i++){
        const name   = localStorage.name(i);
        const value = localStorage.getItem(name);
        const html = '<p>'+name+'</p>';
        $("#formlist").append(html);
    }


    $("#send").on("click",function(){
        $(".main").fadeOut("4000");
        $(".fin").fadeIn("4000")
    });