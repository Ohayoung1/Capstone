var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(35.14152416269298, 126.9312745478554),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageOption = {
    offset: new kakao.maps.Point(27, 69),
};

// 초기 버스 위치 설정
var markerPosition = new kakao.maps.LatLng(35.14232922274663, 126.93451741635835);

// 버스 아이콘 이미지 설정
var markerImage = new kakao.maps.MarkerImage(
    '/0_capstone/그림2.svg', // 버스 아이콘 이미지 파일 경로
    new kakao.maps.Size(40, 80), // 이미지 크기
    {
        offset: new kakao.maps.Point(20, 20) // 이미지 중심을 마커의 중심으로 설정
    }
);

var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});

marker.setMap(map);

// 서버로부터 위치 데이터를 받아와서 버스 아이콘 이동
function updateBusLocation() {
    // 서버로부터 위치 데이터를 받아오는 Ajax 요청
    fetch('http://15.164.210.143/Logtest.php')
        .then(response => response.json())
        .then(data => {
            // 받아온 위치로 버스 아이콘 이동
            var newPosition = new kakao.maps.LatLng(data.lat, data.lon);
            marker.setPosition(newPosition);
        })
        .catch(error => console.error('Error:', error));
}

// 1초 간격으로 위치 업데이트
setInterval(updateBusLocation, 500);


/*
// 1초마다 호출되는 함수
function moveBusRight() {
    // 현재 마커의 위치 가져오기
    var currentPosition = marker.getPosition();

    // 오른쪽으로 0.001 경도 값 이동 (원하는 이동 거리에 맞게 조절)
    var newPosition = new kakao.maps.LatLng(
        currentPosition.getLat() + 0.00003,
        currentPosition.getLng() - 0.000005,
    );

    // 새로운 위치로 마커 이동
    marker.setPosition(newPosition);
}

// 1초마다 moveBusRight 함수 호출
setInterval(moveBusRight, 700); // 1000 밀리초(0.8초)마다 호출
*/


// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '출발지',
        latlng: new kakao.maps.LatLng(35.141939023044976, 126.92780114915257)
    },
    {
        title: '미술대학',
        latlng: new kakao.maps.LatLng(35.14338939970259, 126.93025518820647)
    },
    {
        title: '중앙도서관',
        latlng: new kakao.maps.LatLng(35.1423175565204, 126.9316195415852)
    },
    {
        title: '공대2공학관',
        latlng: new kakao.maps.LatLng(35.13917063351033, 126.9335698684025)
    },
    {
        title: '경상대(본관남쪽)',
        latlng: new kakao.maps.LatLng(35.140888433987946, 126.93486879242569)
    },
    {
        title: '본관북쪽',
        latlng: new kakao.maps.LatLng(35.1439053805719, 126.93419700157803)
    },
    {
        title: '학생회관',
        latlng: new kakao.maps.LatLng(35.143521470165, 126.93268296557616)
    },
    {
        title: '종점',
        latlng: new kakao.maps.LatLng(35.14255470117653, 126.92864281273113)
    },
];

// 마커 이미지의 이미지 주소입니다
var imageSrc1 = "https://cdn-icons-png.flaticon.com/128/6395/6395324.png";

for (var i = 0; i < positions.length; i++) {

    // 마커 이미지의 이미지 크기 입니다
    var imageSize1 = new kakao.maps.Size(100, 100); // 원래 (24,35)

    // 마커 이미지를 생성합니다    
    var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1);

    // 마커를 생성합니다
    var marker1 = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage1 // 마커 이미지 
    });
}

// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
var linePath = [
    new kakao.maps.LatLng(35.141939023044976, 126.92780114915257),
    new kakao.maps.LatLng(35.141810859218154, 126.92827311355296),
    new kakao.maps.LatLng(35.14172748326546, 126.92827318669369),
    new kakao.maps.LatLng(35.141691488835306, 126.9283747210022),
    new kakao.maps.LatLng(35.14177266485882, 126.92846517944662),
    new kakao.maps.LatLng(35.143091232003385, 126.92901818534952),
    new kakao.maps.LatLng(35.14320848926291, 126.92915525195087),
    new kakao.maps.LatLng(35.14333032034925, 126.92940753661838),
    new kakao.maps.LatLng(35.143488793452846, 126.93068032692348),
    new kakao.maps.LatLng(35.14345324109806, 126.93156372422624),
    new kakao.maps.LatLng(35.13919238182483, 126.9321515990926),
    new kakao.maps.LatLng(35.13901685809963, 126.93258517466602),
    new kakao.maps.LatLng(35.13896969495849, 126.93287050903935),
    new kakao.maps.LatLng(35.13899682385407, 126.93302959392236),
    new kakao.maps.LatLng(35.139186366723806, 126.93349578832579),
    new kakao.maps.LatLng(35.13919541194546, 126.93355338887217),
    new kakao.maps.LatLng(35.139152892351106, 126.93409384013542),
    new kakao.maps.LatLng(35.139168764518246, 126.93427488069335),
    new kakao.maps.LatLng(35.13924777773014, 126.93454091100368),
    new kakao.maps.LatLng(35.13929738227101, 126.93459573603289),
    new kakao.maps.LatLng(35.13938303091531, 126.9346313296447),
    new kakao.maps.LatLng(35.13953627283154, 126.93465040985608),
    new kakao.maps.LatLng(35.139761616311844, 126.93465571627053),
    new kakao.maps.LatLng(35.139957684740075, 126.93469670847352),
    new kakao.maps.LatLng(35.140295763432036, 126.93482262891196),
    new kakao.maps.LatLng(35.140304799176505, 126.93486377077024),
    new kakao.maps.LatLng(35.14031834613739, 126.93491313885976),
    new kakao.maps.LatLng(35.14034989822691, 126.93492134356134),
    new kakao.maps.LatLng(35.14038143852961, 126.93490760209234),
    new kakao.maps.LatLng(35.14040619355174, 126.93484723035552),
    new kakao.maps.LatLng(35.14075323117485, 126.93487164340651),
    new kakao.maps.LatLng(35.14075323117485, 126.93487164340651),
    new kakao.maps.LatLng(35.140913156506095, 126.93474806792389),
    new kakao.maps.LatLng(35.14103262091478, 126.93481106837595),
    new kakao.maps.LatLng(35.14437850880158, 126.93403750314683),
    new kakao.maps.LatLng(35.144765944530405, 126.93376284851614),
    new kakao.maps.LatLng(35.144182260532446, 126.93366730237659),
    new kakao.maps.LatLng(35.143591865787215, 126.93366229461894),
    new kakao.maps.LatLng(35.14311415319273, 126.93367914241242),
    new kakao.maps.LatLng(35.143019496713634, 126.93365452893823),
    new kakao.maps.LatLng(35.14296987222829, 126.93356403832325),
    new kakao.maps.LatLng(35.14294955698392, 126.93350095756412),
    new kakao.maps.LatLng(35.1429494982241, 126.93339396659476),
    new kakao.maps.LatLng(35.14321745825163, 126.93303985377685),
    new kakao.maps.LatLng(35.14335482785569, 126.93288062563839),
    new kakao.maps.LatLng(35.14342237370349, 126.93277906530243),
    new kakao.maps.LatLng(35.143505650591536, 126.93260067725957),
    new kakao.maps.LatLng(35.14361598947161, 126.9324606738299),
    new kakao.maps.LatLng(35.143602395584956, 126.93232900275707),
    new kakao.maps.LatLng(35.14354827097693, 126.93225223293),
    new kakao.maps.LatLng(35.14347615592408, 126.9322413191783),
    new kakao.maps.LatLng(35.143520353655845, 126.93070224719314),
    new kakao.maps.LatLng(35.143368676126535, 126.9294898047034),
    new kakao.maps.LatLng(35.143300917285664, 126.92922101276895),
    new kakao.maps.LatLng(35.14322422778874, 126.92909488420541),
    new kakao.maps.LatLng(35.143138550266286, 126.92901265753783),
    new kakao.maps.LatLng(35.14306415257484, 126.92895236814292),
    new kakao.maps.LatLng(35.14238570234635, 126.92865393358488)
];

// 지도에 표시할 선을 생성합니다
var polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 15, // 선의 두께 입니다
    strokeColor: '#FFAE00', // 선의 색깔입니다
    strokeOpacity: 0.6, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline.setMap(map);