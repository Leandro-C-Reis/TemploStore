import React from 'react';

interface props
{
    fill: string;
}

const Logo = (props: props) => (
    <svg width="233" height="76" viewBox="0 0 233 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.9141 19.4844H20.4844V47H14.3906V19.4844H0.9375V13.3906H33.9141V19.4844ZM66.0469 33.2656H46.8047V27.125H66.0469V33.2656ZM68.7891 47H46.8047C45.9609 47 45.0391 46.8516 44.0391 46.5547C43.0391 46.2578 42.1094 45.7734 41.25 45.1016C40.4062 44.4141 39.6953 43.5312 39.1172 42.4531C38.5547 41.3594 38.2734 40.0234 38.2734 38.4453V16.4609C38.2734 16.0391 38.3516 15.6406 38.5078 15.2656C38.6641 14.8906 38.875 14.5625 39.1406 14.2812C39.4219 14 39.75 13.7813 40.125 13.625C40.5 13.4687 40.9062 13.3906 41.3438 13.3906H68.7891V19.4844H44.3672V38.4453C44.3672 39.2422 44.5781 39.8516 45 40.2734C45.4219 40.6953 46.0391 40.9062 46.8516 40.9062H68.7891V47ZM113.812 47H107.672V26.9844L96.8672 45.9922C96.6016 46.4766 96.2266 46.8438 95.7422 47.0938C95.2734 47.3438 94.7656 47.4688 94.2188 47.4688C93.6875 47.4688 93.1875 47.3438 92.7188 47.0938C92.2656 46.8438 91.9062 46.4766 91.6406 45.9922L80.7891 26.9844V47H74.6953V15.9922C74.6953 15.2891 74.8984 14.6641 75.3047 14.1172C75.7266 13.5703 76.2734 13.2031 76.9453 13.0156C77.2734 12.9375 77.6016 12.9141 77.9297 12.9453C78.2578 12.9609 78.5703 13.0313 78.8672 13.1562C79.1797 13.2656 79.4609 13.4297 79.7109 13.6484C79.9609 13.8516 80.1719 14.1016 80.3438 14.3984L94.2188 38.5156L108.094 14.3984C108.453 13.8047 108.945 13.3828 109.57 13.1328C110.211 12.8828 110.875 12.8438 111.562 13.0156C112.219 13.2031 112.758 13.5703 113.18 14.1172C113.602 14.6641 113.812 15.2891 113.812 15.9922V47ZM154.406 27.4531C154.406 28.8438 154.234 30.0859 153.891 31.1797C153.547 32.2734 153.078 33.2422 152.484 34.0859C151.906 34.9141 151.234 35.625 150.469 36.2188C149.703 36.8125 148.898 37.2969 148.055 37.6719C147.227 38.0469 146.383 38.3203 145.523 38.4922C144.68 38.6641 143.883 38.75 143.133 38.75H129.352V32.6562H143.133C143.914 32.5938 144.617 32.4375 145.242 32.1875C145.883 31.9219 146.43 31.5703 146.883 31.1328C147.336 30.6953 147.688 30.1719 147.938 29.5625C148.188 28.9375 148.312 28.2344 148.312 27.4531V24.6875C148.234 23.9219 148.07 23.2188 147.82 22.5781C147.57 21.9375 147.227 21.3906 146.789 20.9375C146.367 20.4844 145.852 20.1328 145.242 19.8828C144.633 19.6172 143.93 19.4844 143.133 19.4844H129.398C128.586 19.4844 127.969 19.6953 127.547 20.1172C127.125 20.5391 126.914 21.1484 126.914 21.9453V47H120.82V21.9453C120.82 20.3828 121.102 19.0547 121.664 17.9609C122.242 16.8672 122.953 15.9844 123.797 15.3125C124.656 14.6406 125.586 14.1563 126.586 13.8594C127.586 13.5469 128.508 13.3906 129.352 13.3906H143.133C144.508 13.3906 145.742 13.5703 146.836 13.9297C147.93 14.2734 148.891 14.7422 149.719 15.3359C150.562 15.9141 151.273 16.5859 151.852 17.3516C152.445 18.1172 152.93 18.9219 153.305 19.7656C153.695 20.5938 153.977 21.4375 154.148 22.2969C154.32 23.1406 154.406 23.9375 154.406 24.6875V27.4531ZM190.5 47H162.703C162.266 47 161.859 46.9219 161.484 46.7656C161.109 46.6094 160.781 46.3984 160.5 46.1328C160.234 45.8516 160.023 45.5234 159.867 45.1484C159.711 44.7734 159.633 44.3672 159.633 43.9297V13.3906H165.727V40.9062H190.5V47ZM229.734 33.4062C229.734 35.4531 229.383 37.3359 228.68 39.0547C227.977 40.7734 227 42.2578 225.75 43.5078C224.5 44.7578 223.016 45.7344 221.297 46.4375C219.594 47.125 217.734 47.4688 215.719 47.4688H207.469C205.453 47.4688 203.586 47.125 201.867 46.4375C200.148 45.7344 198.664 44.7578 197.414 43.5078C196.164 42.2578 195.18 40.7734 194.461 39.0547C193.758 37.3359 193.406 35.4531 193.406 33.4062V26.9844C193.406 24.9531 193.758 23.0781 194.461 21.3594C195.18 19.625 196.164 18.1406 197.414 16.9062C198.664 15.6563 200.148 14.6797 201.867 13.9766C203.586 13.2734 205.453 12.9219 207.469 12.9219H215.719C217.734 12.9219 219.594 13.2734 221.297 13.9766C223.016 14.6797 224.5 15.6563 225.75 16.9062C227 18.1406 227.977 19.625 228.68 21.3594C229.383 23.0781 229.734 24.9531 229.734 26.9844V33.4062ZM223.641 26.9844C223.641 25.7812 223.445 24.6953 223.055 23.7266C222.68 22.7422 222.141 21.9062 221.438 21.2188C220.75 20.5156 219.914 19.9766 218.93 19.6016C217.961 19.2109 216.891 19.0156 215.719 19.0156H207.469C206.281 19.0156 205.195 19.2109 204.211 19.6016C203.242 19.9766 202.406 20.5156 201.703 21.2188C201 21.9062 200.453 22.7422 200.062 23.7266C199.688 24.6953 199.5 25.7812 199.5 26.9844V33.4062C199.5 34.6094 199.688 35.7031 200.062 36.6875C200.453 37.6562 201 38.4922 201.703 39.1953C202.406 39.8828 203.242 40.4219 204.211 40.8125C205.195 41.1875 206.281 41.375 207.469 41.375H215.672C216.859 41.375 217.938 41.1875 218.906 40.8125C219.891 40.4219 220.734 39.8828 221.438 39.1953C222.141 38.4922 222.68 37.6562 223.055 36.6875C223.445 35.7031 223.641 34.6094 223.641 33.4062V26.9844Z" fill={props.fill}/>
    <path d="M62.8809 67.8535C62.8809 68.1699 62.8252 68.5127 62.7139 68.8818C62.6025 69.2451 62.4209 69.585 62.1689 69.9014C61.9229 70.2119 61.5977 70.4727 61.1934 70.6836C60.7949 70.8945 60.3086 71 59.7344 71H55.6123C55.2959 71 54.9531 70.9443 54.584 70.833C54.2207 70.7217 53.8809 70.543 53.5645 70.2969C53.2539 70.0449 52.9932 69.7197 52.7822 69.3213C52.5713 68.917 52.4658 68.4277 52.4658 67.8535C52.4658 67.5371 52.5215 67.1943 52.6328 66.8252C52.7441 66.4561 52.9229 66.1162 53.1689 65.8057C53.4209 65.4893 53.7461 65.2256 54.1445 65.0146C54.5488 64.8037 55.0381 64.6982 55.6123 64.6982H59.7344V66.8779H55.6123C55.3018 66.8779 55.0615 66.9746 54.8916 67.168C54.7217 67.3555 54.6367 67.5898 54.6367 67.8711C54.6367 68.1699 54.7334 68.4043 54.9268 68.5742C55.126 68.7383 55.3604 68.8203 55.6299 68.8203H59.7344C60.0449 68.8203 60.2852 68.7266 60.4551 68.5391C60.625 68.3516 60.71 68.1172 60.71 67.8359V64.6455C60.71 64.3467 60.6162 64.1094 60.4287 63.9336C60.2471 63.7578 60.0156 63.6699 59.7344 63.6699H54.7158V61.499H59.7344C60.0508 61.499 60.3906 61.5547 60.7539 61.666C61.123 61.7773 61.4629 61.959 61.7734 62.2109C62.0898 62.457 62.3535 62.7822 62.5645 63.1865C62.7754 63.585 62.8809 64.0713 62.8809 64.6455V67.8535ZM75.2207 69.8486C75.2207 70.0127 75.1914 70.165 75.1328 70.3057C75.0742 70.4463 74.9922 70.5693 74.8867 70.6748C74.7871 70.7744 74.667 70.8535 74.5264 70.9121C74.3916 70.9707 74.2451 71 74.0869 71H68.9189C68.6377 71 68.3359 70.9678 68.0137 70.9033C67.6973 70.8389 67.3838 70.7363 67.0732 70.5957C66.7627 70.4492 66.4609 70.2676 66.168 70.0508C65.8809 69.8281 65.6289 69.5615 65.4121 69.251C65.1953 68.9346 65.0195 68.5713 64.8848 68.1611C64.7559 67.751 64.6914 67.2881 64.6914 66.7725V61.499H66.9766V66.7725C66.9766 67.0713 67.0264 67.3408 67.126 67.5811C67.2314 67.8154 67.3721 68.0176 67.5479 68.1875C67.7236 68.3574 67.9287 68.4893 68.1631 68.583C68.4033 68.6709 68.6611 68.7148 68.9365 68.7148H72.9355V61.499H75.2207V69.8486ZM87.7891 67.792C87.7891 68.1846 87.7393 68.5391 87.6396 68.8555C87.54 69.166 87.4082 69.4414 87.2441 69.6816C87.0801 69.916 86.8896 70.1182 86.6729 70.2881C86.4561 70.4521 86.2275 70.5869 85.9873 70.6924C85.7529 70.7979 85.5127 70.877 85.2666 70.9297C85.0264 70.9766 84.7979 71 84.5811 71H80.459C80.0664 71 79.7148 70.9502 79.4043 70.8506C79.0938 70.751 78.8184 70.6191 78.5781 70.4551C78.3438 70.2852 78.1416 70.0918 77.9717 69.875C77.8076 69.6582 77.6729 69.4326 77.5674 69.1982C77.4619 68.958 77.3828 68.7178 77.3301 68.4775C77.2832 68.2314 77.2598 68.0029 77.2598 67.792V64.6982C77.2598 64.1123 77.3652 63.6172 77.5762 63.2129C77.793 62.8027 78.0596 62.4717 78.376 62.2197C78.6982 61.9619 79.0469 61.7773 79.4219 61.666C79.7969 61.5547 80.1426 61.499 80.459 61.499H84.5811V63.7842H80.4766C80.1719 63.7842 79.9404 63.8633 79.7822 64.0215C79.624 64.1738 79.5449 64.3994 79.5449 64.6982V67.7744C79.5449 68.085 79.6211 68.3193 79.7734 68.4775C79.9316 68.6357 80.1602 68.7148 80.459 68.7148H84.5811C84.8916 68.7148 85.123 68.6357 85.2754 68.4775C85.4277 68.3193 85.5039 68.0908 85.5039 67.792V57.4824H87.7891V67.792ZM92.2891 59.5479H90.0039V57.4824H92.2891V59.5479ZM92.2891 71H90.0039V61.499H92.2891V71ZM104.822 67.792C104.822 68.1846 104.772 68.5391 104.673 68.8555C104.573 69.166 104.441 69.4414 104.277 69.6816C104.113 69.916 103.923 70.1182 103.706 70.2881C103.489 70.4521 103.261 70.5869 103.021 70.6924C102.786 70.7979 102.546 70.877 102.3 70.9297C102.06 70.9766 101.831 71 101.614 71H97.4922C97.1758 71 96.8301 70.9443 96.4551 70.833C96.0801 70.7217 95.7314 70.54 95.4092 70.2881C95.0928 70.0303 94.8262 69.6992 94.6094 69.2949C94.3984 68.8848 94.293 68.3838 94.293 67.792V64.6982C94.293 64.1123 94.3984 63.6172 94.6094 63.2129C94.8262 62.8027 95.0928 62.4717 95.4092 62.2197C95.7314 61.9619 96.0801 61.7773 96.4551 61.666C96.8301 61.5547 97.1758 61.499 97.4922 61.499H101.614C102.2 61.499 102.698 61.6045 103.108 61.8154C103.519 62.0264 103.85 62.293 104.102 62.6152C104.354 62.9316 104.535 63.2773 104.646 63.6523C104.764 64.0273 104.822 64.376 104.822 64.6982V67.792ZM102.537 64.7158C102.537 64.3994 102.458 64.165 102.3 64.0127C102.142 63.8604 101.913 63.7842 101.614 63.7842H97.5098C97.2051 63.7842 96.9736 63.8633 96.8154 64.0215C96.6572 64.1738 96.5781 64.3994 96.5781 64.6982V67.792C96.5781 68.0908 96.6572 68.3193 96.8154 68.4775C96.9736 68.6357 97.2051 68.7148 97.5098 68.7148H101.614C101.925 68.7148 102.156 68.6357 102.309 68.4775C102.461 68.3193 102.537 68.0908 102.537 67.792V64.7158ZM121.812 67.792C121.812 68.1846 121.762 68.5391 121.662 68.8555C121.562 69.166 121.431 69.4414 121.267 69.6816C121.103 69.916 120.912 70.1182 120.695 70.2881C120.479 70.4521 120.25 70.5869 120.01 70.6924C119.775 70.7979 119.535 70.877 119.289 70.9297C119.049 70.9766 118.82 71 118.604 71H112.416V68.7148H118.586C118.896 68.7148 119.131 68.6357 119.289 68.4775C119.447 68.3193 119.526 68.0908 119.526 67.792C119.497 67.1826 119.189 66.8779 118.604 66.8779H115.062C114.558 66.8779 114.13 66.79 113.778 66.6143C113.427 66.4385 113.14 66.2188 112.917 65.9551C112.7 65.6914 112.542 65.4072 112.442 65.1025C112.349 64.7979 112.302 64.5137 112.302 64.25C112.302 63.7402 112.393 63.3125 112.574 62.9668C112.756 62.6152 112.984 62.3311 113.26 62.1143C113.535 61.8975 113.834 61.7422 114.156 61.6484C114.479 61.5488 114.78 61.499 115.062 61.499H120.678V63.7842H115.079C114.962 63.7842 114.868 63.7988 114.798 63.8281C114.733 63.8516 114.684 63.8867 114.648 63.9336C114.619 63.9746 114.602 64.0215 114.596 64.0742C114.59 64.1211 114.587 64.168 114.587 64.2148C114.593 64.3086 114.61 64.3818 114.64 64.4346C114.669 64.4873 114.704 64.5254 114.745 64.5488C114.792 64.5723 114.842 64.5869 114.895 64.5928C114.953 64.5928 115.009 64.5928 115.062 64.5928H118.604C119.189 64.5928 119.688 64.6982 120.098 64.9092C120.508 65.1201 120.839 65.3867 121.091 65.709C121.343 66.0254 121.524 66.3711 121.636 66.7461C121.753 67.1211 121.812 67.4697 121.812 67.792ZM133.896 71.9141C133.896 72.3066 133.847 72.6582 133.747 72.9688C133.647 73.2852 133.516 73.5605 133.352 73.7949C133.188 74.0352 132.997 74.2373 132.78 74.4014C132.563 74.5713 132.335 74.709 132.095 74.8145C131.86 74.9199 131.623 74.9961 131.383 75.043C131.143 75.0957 130.914 75.1221 130.697 75.1221H126.575V72.8369H130.697C131.002 72.8369 131.23 72.7578 131.383 72.5996C131.535 72.4414 131.611 72.2129 131.611 71.9141V61.499H133.896V71.9141ZM130.697 71H126.575C126.247 71 125.896 70.9443 125.521 70.833C125.151 70.7217 124.806 70.54 124.483 70.2881C124.161 70.0303 123.895 69.6992 123.684 69.2949C123.473 68.8848 123.367 68.3838 123.367 67.792V61.499H125.652V67.792C125.652 68.0908 125.731 68.3193 125.89 68.4775C126.048 68.6357 126.282 68.7148 126.593 68.7148H130.697V71ZM145.261 67.792C145.261 68.1846 145.211 68.5391 145.111 68.8555C145.012 69.166 144.88 69.4414 144.716 69.6816C144.552 69.916 144.361 70.1182 144.145 70.2881C143.928 70.4521 143.699 70.5869 143.459 70.6924C143.225 70.7979 142.984 70.877 142.738 70.9297C142.498 70.9766 142.27 71 142.053 71H135.865V68.7148H142.035C142.346 68.7148 142.58 68.6357 142.738 68.4775C142.896 68.3193 142.976 68.0908 142.976 67.792C142.946 67.1826 142.639 66.8779 142.053 66.8779H138.511C138.007 66.8779 137.579 66.79 137.228 66.6143C136.876 66.4385 136.589 66.2188 136.366 65.9551C136.149 65.6914 135.991 65.4072 135.892 65.1025C135.798 64.7979 135.751 64.5137 135.751 64.25C135.751 63.7402 135.842 63.3125 136.023 62.9668C136.205 62.6152 136.434 62.3311 136.709 62.1143C136.984 61.8975 137.283 61.7422 137.605 61.6484C137.928 61.5488 138.229 61.499 138.511 61.499H144.127V63.7842H138.528C138.411 63.7842 138.317 63.7988 138.247 63.8281C138.183 63.8516 138.133 63.8867 138.098 63.9336C138.068 63.9746 138.051 64.0215 138.045 64.0742C138.039 64.1211 138.036 64.168 138.036 64.2148C138.042 64.3086 138.06 64.3818 138.089 64.4346C138.118 64.4873 138.153 64.5254 138.194 64.5488C138.241 64.5723 138.291 64.5869 138.344 64.5928C138.402 64.5928 138.458 64.5928 138.511 64.5928H142.053C142.639 64.5928 143.137 64.6982 143.547 64.9092C143.957 65.1201 144.288 65.3867 144.54 65.709C144.792 66.0254 144.974 66.3711 145.085 66.7461C145.202 67.1211 145.261 67.4697 145.261 67.792ZM155.351 63.7842H151.36V71H149.049V63.7842H146.078V61.499H149.049V58.3965H151.36V61.499H155.351V63.7842ZM167.04 64.6455C167.04 64.9619 166.984 65.3047 166.873 65.6738C166.762 66.0371 166.58 66.377 166.328 66.6934C166.082 67.0039 165.757 67.2646 165.353 67.4756C164.954 67.6865 164.468 67.792 163.894 67.792H159.771V65.6211H163.894C164.204 65.6211 164.444 65.5273 164.614 65.3398C164.784 65.1465 164.869 64.9092 164.869 64.6279C164.869 64.3291 164.772 64.0947 164.579 63.9248C164.392 63.7549 164.163 63.6699 163.894 63.6699H159.771C159.461 63.6699 159.221 63.7666 159.051 63.96C158.881 64.1475 158.796 64.3818 158.796 64.6631V67.8535C158.796 68.1582 158.89 68.3955 159.077 68.5654C159.271 68.7354 159.508 68.8203 159.789 68.8203H163.894V71H159.771C159.455 71 159.112 70.9443 158.743 70.833C158.38 70.7217 158.04 70.543 157.724 70.2969C157.413 70.0449 157.152 69.7197 156.941 69.3213C156.73 68.917 156.625 68.4277 156.625 67.8535V64.6455C156.625 64.3291 156.681 63.9893 156.792 63.626C156.903 63.2568 157.082 62.917 157.328 62.6064C157.58 62.29 157.905 62.0264 158.304 61.8154C158.708 61.6045 159.197 61.499 159.771 61.499H163.894C164.21 61.499 164.55 61.5547 164.913 61.666C165.282 61.7773 165.622 61.959 165.933 62.2109C166.249 62.457 166.513 62.7822 166.724 63.1865C166.935 63.585 167.04 64.0713 167.04 64.6455ZM177.06 71H174.774V64.6982C174.774 64.3994 174.695 64.1738 174.537 64.0215C174.379 63.8633 174.145 63.7842 173.834 63.7842H170.863V71H168.578V62.6328C168.578 62.4746 168.607 62.3281 168.666 62.1934C168.725 62.0527 168.807 61.9326 168.912 61.833C169.018 61.7275 169.141 61.6455 169.281 61.5869C169.422 61.5283 169.571 61.499 169.729 61.499H173.852C174.168 61.499 174.508 61.5547 174.871 61.666C175.234 61.7773 175.58 61.9561 175.908 62.2021V61.499H179.002C179.219 61.499 179.447 61.5254 179.688 61.5781C179.928 61.625 180.165 61.7012 180.399 61.8066C180.64 61.9121 180.868 62.0498 181.085 62.2197C181.302 62.3838 181.492 62.5859 181.656 62.8262C181.82 63.0605 181.952 63.333 182.052 63.6436C182.151 63.9541 182.201 64.3057 182.201 64.6982V71H179.916V64.6982C179.916 64.3994 179.84 64.1738 179.688 64.0215C179.541 63.8633 179.312 63.7842 179.002 63.7842H176.945C177.021 64.0654 177.06 64.3701 177.06 64.6982V71Z" fill={props.fill}/>
    </svg>
);

export default Logo;