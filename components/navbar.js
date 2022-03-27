import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import globals from '../components/globals'
import Link from 'next/link'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { useEffect } from 'react'

var toastPoped = toastPoped || false
var toastProcessed = toastProcessed || false
var toastFunc = () => { console.error("illegal state: this function should not be called") }

const FormWithToasts = () => {
    if (!toastPoped) {
        const { addToast } = useToasts()

        toastFunc = () => {
            toastPoped = true
            addToast((<a href='https://supportukrainenow.org/'>🇺🇦 UnlegitMC Team stands with Ukraine! And you?</a>), { appearance: 'info', autoDismiss: false });
        }
    }

    return (<p></p>)
};

export default function Navbar() {
    useEffect(() => {
        if (!toastProcessed) {
            toastFunc()
        }
        toastProcessed = true

        // 给墙内用户加载js，以便过滤内容
        function loadScript(src, callback) {
            var script = document.createElement('script'),
                head = document.getElementsByTagName('head')[0];
            script.type = 'text/javascript';
            // script.charset = 'UTF-8';
            script.src = src;
            if (script.addEventListener) {
                script.addEventListener('load', function () {
                    callback();
                }, false);
            } else if (script.attachEvent) {
                script.attachEvent('onreadystatechange', function () {
                    var target = window.event.srcElement;
                    if (target.readyState == 'loaded') {
                        callback();
                    }
                });
            }
            head.appendChild(script);
        }
        if(window.location.host == "cn.getfdp.today") {
            loadScript("https://xgcdn.getfdp.today/fdpweb.js?time="+new Date().getTime(), function() {
                console.log("I LOVE XIJINPING!")
            })
        }
        var cn =((navigator.language || navigator.browserLanguage).toLowerCase());
        if((cn.indexOf('zh')!=-1) || (times.indexOf("中国")!=-1) && window.location.host != "cn.getfdp.today")
        {
            console.log("正在检查节点是否可用...");
            loadScript("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js",function(){
                $.get("https://xgcdn.getfdp.today/getcode.php?time="+new Date().getTime(),function (a) {
                    var code=JSON.parse(a);
                    console.log(code);
                    if(code.code){
                        console.log("鉴定结果: 中国人       + 30,000,000 Social Credit");
                        window.location.href="https://cn.getfdp.today/";
                    }else{
                        console.log("鉴定结果: 中国人 但是可能有点问题，要跑路咯");
                        window.location.href=code.href;
                    }
                }).error(function(){
                        console.log("节点异常!已保留原网页!");
                });
            });
        }
    })
    return (
        <div>
            <div className="navbar bg-base-100 shadow bg-opacity-90 border-b fixed top-0 z-50 backdrop-blur-xl">
                <div className="navbar-start">
                    <a className="btn no-animation btn-ghost normal-case text-xl text-gradient">FDP Client</a>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/download'><a>Download</a></Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href={globals.repo_url}><FontAwesomeIcon icon={faGithub}/>GitHub</a></li>
                        <li><a href={globals.discord}><FontAwesomeIcon icon={faDiscord}/>Discord</a></li>
                    </ul>
                </div>
            </div>
            <ToastProvider>
                <FormWithToasts />
            </ToastProvider>
        </div>
    )
}
