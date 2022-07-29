<template>
  <div>
    <div v-show="showPage === '0'">
      <a-row :gutter="[8, 8]">
        <a-col :span="18">
          <a-card :title="title1" style="height: 400px" class="shadow" hoverable>
            <a slot="extra" @click="openHumi">更多</a>
            <a-row type="flex" style="height: 50px; font-size: 16px">
              <a-col :span="4" @click="hisTem1('1')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010040493"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="11312"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="11313"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="11314"
                      />
                      <path
                        d="M597.681 335.009c0-7.67-2.36-13.569-7.08-17.109a35.115 35.115 0 0 0-20.061-5.9c-3.54 0-6.49 1.77-10.029 4.13-3.54 2.95-6.49 5.31-8.26 7.08a75.758 75.758 0 0 0-11.211 13.569c-3.54 4.72-7.67 9.44-11.209 13.569-11.209 12.979-23.009 27.139-35.988 41.3-13.569 14.749-26.549 27.729-38.938 39.528-1.18 1.18-2.95 2.36-4.13 3.54l-4.72 2.36c-1.77 1.18-3.54 1.77-4.72 2.95l-5.31 3.54c-2.95 2.36-5.31 4.13-7.08 5.9-2.36 2.36-2.95 4.13-2.95 5.9 0 7.08 2.95 12.389 10.03 16.519 5.9 4.72 12.979 6.49 20.059 6.49a31.985 31.985 0 0 0 14.756-3.543c4.13-2.36 8.26-5.9 12.979-10.619 2.95-3.54 6.49-7.67 11.209-12.979l11.8-12.979c2.95-2.95 7.67-7.67 13.569-14.159s12.389-14.159 20.649-23.009c-1.77 9.44-3.54 20.649-4.72 33.628-2.36 12.979-4.13 25.959-5.9 40.118l-4.72 41.888c-1.18 14.159-2.36 27.729-2.95 39.528-1.18 22.419-2.36 44.838-2.95 67.257q-1.77 33.628-1.77 58.407c0 9.44 2.36 16.519 7.67 21.829 5.31 5.9 12.389 8.26 21.829 8.26a43.479 43.479 0 0 0 15.929-3.54c4.72-2.36 7.67-5.31 7.67-8.85 0-1.77-0.59-5.31-0.59-11.209a149.392 149.392 0 0 1-2.36-18.879 116.91 116.91 0 0 1-2.36-21.239 132.008 132.008 0 0 1-1.18-20.649c0-41.3 1.18-82.6 4.72-124.484 3.54-41.3 10.03-82.6 20.649-123.3a106.366 106.366 0 0 1 2.95-11.209l2.36-11.209 1.77-11.209c-0.002-3.547 0.588-7.086 0.588-11.216z"
                        fill="#FFFFFF"
                        p-id="11315"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp1.temp)<parseInt(this.tempUp)&& parseInt(productData.temp1.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{ productData.temp1.temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp1.humi)<parseInt(this.humiUp)&& parseInt(productData.temp1.humi)>parseInt(this.humiDown)? '' : 'error']"
                      >{{ productData.temp1.humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1('2')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010074800"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="11533"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="11534"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="11535"
                      />
                      <path
                        d="M658.94 684.941c0-8.235-2.941-15.294-8.235-22.353S639.529 652 632.471 652a64.116 64.116 0 0 0-15.294 1.765l-8.235 1.765-8.235 1.176c-12.941 1.176-25.882 2.353-39.412 2.353-14.118 0-27.059 0.588-39.412 1.176-11.765 1.176-24.118 1.765-37.059 2.353-12.941 1.176-29.412 2.353-48.824 4.706 13.529-11.176 24.706-21.176 33.529-29.412l24.118-22.941 39.412-38.235c12.941-12.941 25.881-25.294 39.412-38.235a170.839 170.839 0 0 0 38.235-57.059 184.229 184.229 0 0 0 12.353-67.647c0-12.353-2.941-24.706-8.235-37.059a138.277 138.277 0 0 0-22.941-32.941 121.843 121.843 0 0 0-35.294-22.941A108.656 108.656 0 0 0 513.06 312a180.13 180.13 0 0 0-50 7.059 125.575 125.575 0 0 0-44.12 24.706c-4.706 3.529-8.824 8.824-13.529 14.706-4.706 6.471-9.412 12.941-12.941 20a114.8 114.8 0 0 0-10 21.176 49.641 49.641 0 0 0-4.118 18.824c0 7.059 2.353 12.353 8.235 17.059 5.294 5.294 10.588 7.647 16.471 7.647 4.118 0 7.647-0.588 10.588-2.941a98.088 98.088 0 0 0 8.824-8.235 80.559 80.559 0 0 0 4.706-8.235c1.765-2.941 3.529-6.471 5.294-10 1.176-2.941 2.941-6.471 4.118-10a38.4 38.4 0 0 1 4.706-10c8.235-14.118 17.647-24.706 28.235-32.941 10-7.647 24.118-11.765 41.765-11.765a69.788 69.788 0 0 1 27.059 5.882 82.831 82.831 0 0 1 21.765 15.882 92.786 92.786 0 0 1 14.122 22.941 71.518 71.518 0 0 1 5.294 27.059 95.714 95.714 0 0 1-5.294 32.352A143.025 143.025 0 0 1 561.294 482a160.888 160.888 0 0 1-17.647 25.294c-7.059 8.235-14.706 15.882-21.765 22.941L466 582.588c-18.235 17.647-37.647 34.118-57.647 50a178.261 178.261 0 0 0-15.294 13.53c-4.706 4.706-8.824 9.412-13.529 14.118a82.159 82.159 0 0 0-10 11.765 31.891 31.891 0 0 0-3.529 14.706c0 8.235 2.941 14.706 9.412 18.824 5.882 4.706 12.353 6.471 20 6.471a81.789 81.789 0 0 0 15.882-1.765l8.824-1.765c2.353-0.588 5.294-1.176 8.235-1.765 22.353-2.941 45.294-5.294 69.412-7.647q35.294-3.529 68.824-3.529a286.194 286.194 0 0 1 38.235 2.941c12.353 2.353 24.706 2.941 37.647 2.941 3.529 0 7.059-1.176 10.588-4.706a13.693 13.693 0 0 0 5.88-11.766z"
                        fill="#FFFFFF"
                        p-id="11536"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp2.temp)<parseInt(this.tempUp)&& parseInt(productData.temp2.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{ productData.temp2.temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp2.humi)<parseInt(this.humiUp)&& parseInt(productData.temp2.humi)>parseInt(this.humiDown)? '' : 'error']"
                      >{{ productData.temp2.humi}}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1('3')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010093432"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="11746"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="11747"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="11748"
                      />
                      <path
                        d="M657.703 576.92a85.081 85.081 0 0 0-6.987-34.934 112.5 112.5 0 0 0-20.378-26.783 144.785 144.785 0 0 0-30.858-18.632 235.7 235.7 0 0 0-39.01-13.392c18.632-12.227 32.023-25.036 40.175-37.846 7.569-12.809 11.645-27.948 11.645-46q0-24.454-10.48-41.921a83.792 83.792 0 0 0-27.948-27.365 137.352 137.352 0 0 0-38.428-13.974c-13.974-2.329-27.948-4.076-41.921-4.076-11.063 0-22.707 1.747-34.935 4.076-12.809 3.493-23.872 6.987-34.352 11.645a112.161 112.161 0 0 0-26.2 16.3c-6.987 5.822-9.9 12.227-9.9 18.049 0 6.4 1.747 12.227 6.4 16.885q6.114 6.987 13.974 6.987c4.658 0 11.063-1.165 18.632-4.658l10.48-5.24c3.493-1.747 6.987-3.493 11.063-5.822 8.151-4.076 16.885-8.151 27.365-12.809a72.374 72.374 0 0 1 28.53-6.4c6.987 0 13.974 1.164 21.543 2.329a63.6 63.6 0 0 1 20.961 6.987A47.5 47.5 0 0 1 561.63 374.3a47.5 47.5 0 0 1 5.822 23.29c0 11.645-2.911 22.125-8.151 30.277a87.655 87.655 0 0 1-20.375 23.293c-8.151 6.4-16.3 11.645-25.036 15.138-9.316 4.076-16.885 6.987-23.29 8.151a73.787 73.787 0 0 1-19.8 2.329h-8.73c-5.822 0-11.063 1.165-16.3 2.329-5.822 1.747-9.316 3.493-11.063 5.24q-5.24 5.24-5.24 13.974c0 6.987 2.911 12.809 9.316 18.049 5.822 5.24 11.645 7.569 18.049 7.569a39.141 39.141 0 0 0 13.974-2.329 121.947 121.947 0 0 0 13.392-4.658 131.023 131.023 0 0 1 13.974-4.658 58.658 58.658 0 0 1 14.556-1.747 44.323 44.323 0 0 1 12.227 1.747 68.1 68.1 0 0 0 11.645 2.911 223.811 223.811 0 0 1 23.29 8.151 134.883 134.883 0 0 1 22.125 12.227 83.352 83.352 0 0 1 16.3 18.632 53.9 53.9 0 0 1 6.4 25.619c0 15.721-3.493 29.112-9.9 40.175a98.842 98.842 0 0 1-26.783 29.112 108.382 108.382 0 0 1-36.1 16.885 132.12 132.12 0 0 1-39.01 5.822c-14.556 0-30.277-2.911-46.579-9.316a62.636 62.636 0 0 1-16.885-7.569c-5.24-2.911-10.48-5.822-15.721-9.316-3.493-1.747-6.4-3.493-8.734-4.658a63.512 63.512 0 0 1-6.4-3.493c-4.658-2.329-8.734-4.076-11.645-4.076-5.822 0-10.48 2.329-14.556 6.4-4.658 4.076-6.4 9.316-6.4 15.721 0 6.987 2.329 13.392 7.569 18.049a46.313 46.313 0 0 0 15.719 12.811 149.475 149.475 0 0 0 25.036 9.9c9.316 3.493 19.214 5.822 29.694 8.151a264.49 264.49 0 0 0 29.694 5.24 132.026 132.026 0 0 0 24.454 2.329 180.016 180.016 0 0 0 57.06-9.316c18.632-5.822 36.1-13.974 51.237-25.619a145.407 145.407 0 0 0 37.263-42.5q13.975-24.458 13.975-57.646z"
                        fill="#FFFFFF"
                        p-id="11749"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp3.temp)<parseInt(this.tempUp)&& parseInt(productData.temp3.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{ productData.temp3.temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp3.humi)<parseInt(this.humiUp)&& parseInt(productData.temp3.humi)>parseInt(this.humiDown)? '' : 'error']"
                      >{{ productData.temp3.humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1('4')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010116095"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="11959"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="11960"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="11961"
                      />
                      <path
                        d="M661.474 584.399c0-13.315-7.767-20.527-22.191-20.527a176.761 176.761 0 0 0-24.965 1.668c-8.322 1.664-14.424 2.774-18.863 3.883-0.555-7.212-0.555-13.315-0.555-18.863a150.627 150.627 0 0 1 0.555-15.534c0-7.767 0-17.2 0.555-29.4 0-11.65 0.555-24.965 1.664-39.39 0-14.424 1.11-29.4 2.219-46.047 0.555-16.089 1.664-32.732 2.774-49.376a102.148 102.148 0 0 1 1.664-18.308A103.754 103.754 0 0 0 606 333.64c0-3.329-1.664-6.1-3.883-8.877-2.774-2.219-5.548-4.438-8.877-6.657a50.135 50.135 0 0 0-11.65-4.438 44.807 44.807 0 0 0-10.541-1.664c-3.329 0-6.657 1.11-9.986 2.219a27.742 27.742 0 0 0-8.877 6.1 73.661 73.661 0 0 0-6.657 8.877c-2.219 3.329-4.438 6.1-6.1 8.877q-36.616 49.1-74.9 94.868c-25.523 31.066-49.929 62.689-73.79 95.421-3.329 3.883-6.1 8.322-9.431 12.76a141.092 141.092 0 0 0-8.877 15.534 118.758 118.758 0 0 0-6.657 15.534A39.233 39.233 0 0 0 363 587.173q0 11.65 4.993 19.972a43.321 43.321 0 0 0 13.315 14.98 65.775 65.775 0 0 0 18.863 8.877 62.063 62.063 0 0 0 19.972 2.774 93.764 93.764 0 0 0 16.644-1.664c5.548-0.555 11.65-1.664 17.753-2.774 5.548-1.11 11.1-2.219 16.644-3.883 5.548-1.11 11.1-2.774 16.644-3.883 9.431-2.219 19.417-3.883 29.958-6.1 9.986-2.219 21.082-3.883 34.4-6.1l-1.11 43.273c-1.11 13.315-1.11 22.746-1.11 27.184 0 21.637 8.877 32.178 26.63 32.178a33.433 33.433 0 0 0 16.089-4.438 16.876 16.876 0 0 0 7.212-14.424 115.064 115.064 0 0 0-3.329-27.739c-2.219-8.877-2.774-18.308-2.774-28.294v-32.74l49.931-1.11a16.066 16.066 0 0 0 12.76-5.548q4.989-4.993 4.989-13.315zM559.949 370.807l-7.213 203.606c-8.322 2.219-18.308 4.438-30.513 6.657l-36.616 6.657c-12.205 2.219-23.856 4.438-34.951 5.548a180.873 180.873 0 0 1-25.52 2.219 19.6 19.6 0 0 1-9.436-2.218c-3.329-1.664-4.993-3.883-4.993-7.212 0-4.438 1.664-11.1 6.1-19.417 4.438-7.767 9.431-16.089 15.534-24.965 5.548-8.322 11.1-16.089 16.644-23.856s10.541-13.315 13.87-17.753c14.424-18.308 29.958-38.28 46.6-60.472 16.097-21.637 32.745-44.383 50.494-68.794z"
                        fill="#FFFFFF"
                        p-id="11962"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp4.temp)<parseInt(this.tempUp)&& parseInt(productData.temp4.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{productData.temp4.temp }}℃</span>
                    </span>
                    <span
                      style="padding-left: 16px; font-size: 14px"
                      :class="[parseInt(productData.temp4.humi)<parseInt(this.humiUp)&& parseInt(productData.temp4.humi)>parseInt(this.humiDown)? '' : 'error']"
                    >
                      湿度：
                      <span style="font-size: 20px">{{ productData.temp4.humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1('5')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010133838"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="12172"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="12173"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="12174"
                      />
                      <path
                        d="M651.656 567.014c0-30.946-12.607-55.587-36.676-74.5-12.607-8.6-25.788-14.327-40.115-16.619a380.238 380.238 0 0 0-44.126-2.865c-13.754 0-28.08 1.719-41.834 4.011q-20.63 5.158-44.7 12.034c1.719-21.777 3.438-41.834 5.731-60.172l4.585-57.88c20.63-1.719 40.115-4.011 58.453-6.3l54.441-8.6q5.158-0.86 12.034-1.719a49.158 49.158 0 0 0 12.607-1.146l12.034-2.292a25.706 25.706 0 0 0 10.888-2.865 20 20 0 0 0 5.158-3.438 16.459 16.459 0 0 0 1.146-6.877c0-2.292-1.719-5.158-4.585-8.6a76.24 76.24 0 0 0-10.888-8.023l-13.754-6.877c-4.585-1.146-8.6-2.292-10.888-2.292a24.372 24.372 0 0 0-6.3 1.146 27.935 27.935 0 0 1-6.3 2.292l-7.45 2.292c-2.865 1.146-5.158 1.719-6.877 2.292a378.036 378.036 0 0 1-48.138 9.169 400 400 0 0 1-51.576 2.865c-4.011-3.438-7.45-6.3-10.315-7.45-3.438-1.146-7.45-2.292-10.888-2.292a29.107 29.107 0 0 0-9.742 1.719 52.264 52.264 0 0 0-9.169 3.438q-5.163 10.323-6.882 30.955c-1.719 14.327-2.865 29.8-3.438 45.845-1.146 17.191-2.292 33.81-2.292 49.855-1.147 16.046-1.72 28.654-2.293 37.25l-1.146 7.45-1.146 8.023a80.6 80.6 0 0 0-1.715 16.045c0 1.719 0.573 3.438 2.292 5.731 1.146 2.292 3.438 4.011 5.731 5.731a42.743 42.743 0 0 0 6.877 4.011 13.062 13.062 0 0 0 6.3 1.719 36.95 36.95 0 0 0 11.46-1.719 72.37 72.37 0 0 0 10.315-4.585c3.438-1.719 7.45-4.011 11.461-6.3a126.2 126.2 0 0 1 12.035-5.156c11.461-3.438 22.35-6.3 33.238-7.45a304.949 304.949 0 0 1 34.384-2.292 113.037 113.037 0 0 1 27.507 3.433 79.162 79.162 0 0 1 23.5 10.316c6.877 4.585 12.034 10.888 16.619 18.911 4.011 8.023 6.3 17.765 6.3 29.226a103.619 103.619 0 0 1-9.169 43.556c-6.877 12.607-14.9 22.923-25.215 30.946-10.315 8.6-22.35 14.9-35.53 19.484a128.972 128.972 0 0 1-41.261 6.3c-13.754 0-26.361-1.719-36.676-5.158a134.677 134.677 0 0 1-28.653-12.034 54.192 54.192 0 0 1-11.461-6.3c-3.438-1.719-6.3-3.438-9.169-5.158a61.559 61.559 0 0 1-8.6-4.011 42.318 42.318 0 0 0-6.877-1.146c-5.731 0-9.742 2.292-13.181 5.731-4.011 4.585-5.731 9.742-5.731 16.046a23.326 23.326 0 0 0 6.877 17.192c4.585 5.158 9.742 9.169 16.046 11.461q6.877 3.438 20.63 6.877a177.1 177.1 0 0 0 26.365 6.87c9.169 1.719 18.338 3.438 27.507 4.585 8.6 1.146 16.046 2.292 21.777 2.292a218.274 218.274 0 0 0 61.891-8.6c19.484-5.731 36.676-14.327 51.576-26.934q21.49-17.192 34.384-44.7c8.023-18.33 12.607-39.534 12.607-64.749z"
                        fill="#FFFFFF"
                        p-id="12175"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp5.temp)<parseInt(this.tempUp)&& parseInt(productData.temp5.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{ productData.temp5.temp}}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp5.humi)<parseInt(this.humiUp)&& parseInt(productData.temp5.humi)>parseInt(this.humiDown)? '' : 'error']"
                      >{{ productData.temp5.humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1('6')">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">
                    <svg
                      t="1659010149250"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="12385"
                      width="45"
                      height="45"
                    >
                      <path
                        d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                        fill="#4472C4"
                        p-id="12386"
                      />
                      <path
                        d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                        fill="#4472C4"
                        p-id="12387"
                      />
                      <path
                        d="M657.098 572.53c0-16.736-3.347-31.241-10.042-44.63-6.695-12.831-15.063-23.989-25.662-32.915a132.9 132.9 0 0 0-36.821-20.645c-14.5-4.463-29.01-7.252-43.515-7.252a176.625 176.625 0 0 0-65.272 12.831c-21.2 8.926-41.841 24.547-60.809 47.42 2.789-13.389 5.579-25.663 8.926-35.7a181.9 181.9 0 0 1 8.927-27.899 155.1 155.1 0 0 1 12.273-23.431 174.368 174.368 0 0 1 16.179-22.869 167.451 167.451 0 0 1 11.715-14.5c5.021-5.579 10.6-10.6 16.736-16.179a162.638 162.638 0 0 1 17.853-15.621c6.695-4.463 12.831-8.368 18.968-11.715 2.232-1.116 5.021-2.789 7.81-3.905a64.935 64.935 0 0 1 8.368-3.347c5.021-1.116 10.042-2.232 15.621-3.347 2.789-0.558 5.021-1.116 6.695-2.232a10.961 10.961 0 0 0 5.021-9.484c0-6.695-2.789-12.831-7.81-17.852-5.579-4.463-10.6-7.252-15.621-7.252-8.926 0-21.2 4.463-35.7 13.389-7.81 4.463-15.621 9.484-23.431 14.5a259.028 259.028 0 0 0-22.315 17.294 253.37 253.37 0 0 0-39.052 41.84c-12.278 15.621-22.32 32.357-31.246 49.652a248.069 248.069 0 0 0-20.084 54.672 203.8 203.8 0 0 0-7.81 57.462c0 21.2 2.789 41.283 8.926 59.135a131.982 131.982 0 0 0 25.662 47.978c11.158 13.947 25.662 24.547 42.4 32.357 16.179 7.81 35.146 11.715 56.346 11.715a187.833 187.833 0 0 0 57.462-9.484 158.632 158.632 0 0 0 50.209-27.894 135.968 135.968 0 0 0 35.7-43.515q13.393-25.104 13.393-58.577z m-44.073-4.463a105.915 105.915 0 0 1-9.485 44.073c-6.137 14.5-13.947 26.778-23.989 36.82a106.092 106.092 0 0 1-34.589 24.547 88.908 88.908 0 0 1-40.722 9.483c-13.389 0-25.1-2.232-34.589-7.252-10.042-4.463-17.852-11.158-24.547-19.526-7.252-7.81-12.831-17.294-17.294-28.452a167.207 167.207 0 0 1-10.6-33.473c3.347-13.389 9.484-25.662 17.852-37.378a132.505 132.505 0 0 1 29.009-29.569 131.323 131.323 0 0 1 35.7-20.084c12.831-4.463 26.22-7.252 39.609-7.252 8.926 0 17.294 1.674 26.22 4.463a89.984 89.984 0 0 1 23.994 12.833 82.7 82.7 0 0 1 17.294 21.757 71.084 71.084 0 0 1 6.137 29.01z"
                        fill="#FFFFFF"
                        p-id="12388"
                      />
                    </svg>
                  </p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp6.temp)<parseInt(this.tempUp)&& parseInt(productData.temp6.temp)>parseInt(this.tempDown)? '' : 'error']"
                      >{{ productData.temp6.temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[parseInt(productData.temp6.humi)<parseInt(this.humiUp)&& parseInt(productData.temp6.humi)>parseInt(this.humiDown)? '' : 'error']"
                      >{{ productData.temp6.humi}}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="24">
                <div class="carriage1">
                  <img src="../../static/pic/carriage2.png" width="80%" height="160vh" />
                </div>
              </a-col>
            </a-row>

            <a-row >
              <div style = "cursor: pointer" @click="hisTem1('7')">
              <a-col :span="12" style="padding-top: 28px; text-align: right" >
                <div style="font-size: 14px; margin-top: -20px;">
                  <svg
                    t="1659010167394"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="12598"
                    width="45"
                    height="45"
                  >
                    <path
                      d="M512 899.5c-213.668 0-387.5-173.832-387.5-387.5S298.332 124.5 512 124.5 899.5 298.332 899.5 512 725.668 899.5 512 899.5z"
                      fill="#4472C4"
                      p-id="12599"
                    />
                    <path
                      d="M512 137c-206.776 0-375 168.224-375 375s168.224 375 375 375 375-168.224 375-375-168.224-375-375-375m0-25c220.914 0 400 179.086 400 400S732.914 912 512 912 112 732.914 112 512s179.086-400 400-400z"
                      fill="#4472C4"
                      p-id="12600"
                    />
                    <path
                      d="M643.029 345.834c0-7.64-3.82-13.643-10.368-18.008s-14.188-7.64-22.92-10.368c-9.277-2.183-18.554-3.274-27.285-4.366-9.823-0.546-16.917-1.091-21.828-1.091-3.82 0-10.368 0.546-19.645 1.091-9.823 1.091-20.737 1.637-32.742 2.183-12.005 1.091-25.1 2.729-38.2 3.82-13.643 1.637-26.194 2.729-37.108 3.82l-29.468 3.82c-8.186 1.091-13.1 2.183-14.188 2.729-6.548 3.274-9.277 9.277-9.277 18.008 0 6 2.183 12.005 7.094 18.554a18.4 18.4 0 0 0 9.277 2.729 27.033 27.033 0 0 0 9.277 1.091 158.67 158.67 0 0 0 20.732-1.093c8.731-1.091 16.917-2.183 24.557-3.82 7.094-1.091 14.188-2.728 21.282-3.82s13.643-2.729 20.191-3.82c12.005-2.183 22.92-3.82 33.288-4.911a333.686 333.686 0 0 1 34.925-1.637c10.914 0 16.371 5.457 17.462 16.371-7.094 11.46-13.643 22.919-19.1 33.834a321.286 321.286 0 0 0-15.825 34.379c-10.368 23.465-20.191 46.93-28.922 69.85-9.277 22.92-17.462 45.839-25.1 69.3-7.64 24.011-14.188 47.476-19.645 70.941a111.766 111.766 0 0 0-2.729 13.1 58.277 58.277 0 0 0-1.637 13.643 105.147 105.147 0 0 0 0.546 13.1 41.164 41.164 0 0 0 4.366 13.1 26.67 26.67 0 0 0 7.64 9.823 25.8 25.8 0 0 0 14.188 3.82 16.045 16.045 0 0 0 12.005-4.911c3.274-3.274 5.457-7.094 7.64-11.46l3.274-14.734c0-4.366 0.546-8.731 0.546-13.1a92.5 92.5 0 0 1 0.546-12.005c0-4.366 0-8.731 1.091-13.1 0.546-6 1.637-12.005 2.729-18.008a116.62 116.62 0 0 1 4.366-17.462c4.366-16.917 9.823-36.562 16.917-58.39a842.05 842.05 0 0 1 22.92-64.939 600.189 600.189 0 0 1 29.469-62.757c10.368-19.645 21.828-36.016 34.925-49.659l5.457-5.457 4.911-6c1.091-1.637 1.637-3.82 2.729-6.548a15.847 15.847 0 0 0 1.637-7.642z"
                      fill="#FFFFFF"
                      p-id="12601"
                    />
                  </svg>
                  <p style="color: #4070c1; height: -10px;">厢外监测</p>
                </div>
              </a-col>
              <a-col :span="12" style="padding-top: 10px; font-weight: bold">
                <div class="container">
                  <span style="padding-left: 16px; font-size: 14px">
                    温度：
                    <span
                      style="font-size: 20px"
                      :class="[parseInt(productData.temp7.temp)<parseInt(this.tempUp)&& parseInt(productData.temp7.temp)>parseInt(this.tempDown)? '' : 'error']"
                    >{{ productData.temp7.temp }}℃</span>
                  </span>
                  <span style="padding-left: 16px; font-size: 14px">
                    湿度：
                    <span
                      style="font-size: 20px"
                      :class="[parseInt(productData.temp7.humi)<parseInt(this.humiUp)&& parseInt(productData.temp7.humi)>parseInt(this.humiDown)? '' : 'error']"
                    >{{ productData.temp7.humi }}%</span>
                  </span>
                </div>
              </a-col>
              </div>
            </a-row>
          </a-card>
        </a-col>

        <a-col :span="6">
          <a-card
            :title="this.carNum"
            :bordered="true"
            style="height: 400px"
            class="shadow"
            hoverable
            v-loading="oilsShow"
            element-loading-text="没有注册该设备!!!"
            element-loading-spinner="none"
            element-loading-background="rgba(255,255,255,0.9)"
          >
            <a slot="extra" @click="openOil">更多</a>
            <div id="oil" class="oil"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6">
          <a-card title="车门" style="height: 220px" class="shadow" hoverable>
            <a slot="extra" @click="hisDoor()">更多</a>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="!productData.door1">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="productData.door1">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;侧门</p>
                <el-tag v-show="!productData.door1" type="danger">已开启</el-tag>
                <el-tag v-show="productData.door1">已关闭</el-tag>
              </div>
            </a-col>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="!productData.door2">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="productData.door2">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;后门</p>
                <el-tag v-show="!productData.door2" type="danger">已开启</el-tag>
                <el-tag v-show="productData.door2">已关闭</el-tag>
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="灯开关" style="height: 220px" class="shadow" hoverable>
            <a-col :span="8" style="text-align: center">
              <div>
                <a-spin tip="等待响应" :spinning="spinning1">
                  <p v-show="productData.light1">
                    <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                  </p>
                  <p v-show="!productData.light1">
                    <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                  </p>
                  <p>照明灯</p>
                </a-spin>

                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  :defaultChecked="defaultChecked"
                  @change="changeLight1"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="productData.light2">
                  <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                </p>
                <p v-show="!productData.light2">
                  <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                </p>
                <p>杀菌灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="productData.light2 = !productData.light2"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="productData.light3">
                  <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                </p>
                <p v-show="!productData.light3">
                  <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                </p>
                <p>消毒灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="productData.light3 = !productData.light3"
                />
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="报警装置" style="height: 220px" class="shadow" hoverable>
            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="this.productData.alert1">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />困人报警
              </span>
              <span v-show="!this.productData.alert1">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无困人报警
              </span>
            </a-col>
            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="this.productData.alert2">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />温湿度报警
              </span>
              <span v-show="!this.productData.alert2">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无温湿度报警
              </span>
            </a-col>
            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="this.productData.alert3">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />胎温胎压报警
              </span>
              <span v-show="!this.productData.alert3">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无胎温胎压报警
              </span>
            </a-col>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="16">
          <a-card
            :title="title2"
            hoverable
            style="height: 350px"
            class="shadow"
            v-loading="tireShow"
            element-loading-text="没有注册该设备!!!"
            element-loading-spinner="none"
            element-loading-background="rgba(255,255,255,0.9)"
          >
            <a slot="extra" @click="openTire">更多</a>

            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('0')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire1.humi )<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire1.humi }}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire1.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire1.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('4')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire5.humi )<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire5.humi }}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire5.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire5.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                 <div style = "cursor: pointer" @click="hisTire('8')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire9.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire9.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire9.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire9.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('1')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire2.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire2.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire2.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire2.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('5')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire6.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire6.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire6.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire6.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('9')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire10.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire10.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire10.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire10.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="2"></a-col>
              <a-col :span="21">
                <img src="../../static/pic/3.png" style="width: 70%; margin-left: 15%" />
              </a-col>
              <a-col :span="1"></a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                 <div style = "cursor: pointer" @click="hisTire('2')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire3.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire3.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire3.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire3.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                 <div style = "cursor: pointer" @click="hisTire('6')">
                <a-col :span="6" style="text-align: center">
                  
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire7.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire7.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire7.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire7.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                 <div style = "cursor: pointer" @click="hisTire('10')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire11.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire11.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire11.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire11.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                 <div style = "cursor: pointer" @click="hisTire('3')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire4.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire4.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire4.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire4.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('7')">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire8.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire8.humi}}℃</span>nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire8.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire8.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
              <a-col :span="8">
                <div style = "cursor: pointer" @click="hisTire('11')">
                <a-col :span="6" style="text-align: center">
                   
                  <img src="../../static/icon/轮胎1.svg"  style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire12.humi)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{this.productData.tire12.humi}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(this.productData.tire12.press)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{this.productData.tire12.press}}kPa</span>
                </a-col>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card
            title="车辆震动曲线图"
            style="height: 350px"
            class="shadow"
            hoverable
            v-loading="vibShow"
            element-loading-text="没有注册该设备!!!"
            element-loading-spinner="none"
            element-loading-background="rgba(255,255,255,0.9)"
          >
            <a slot="extra" @click="openVib">更多</a>
            <div id="acc" style="height: 290px; width: 100%;margin-left: 20px; margin-top: -20px"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-card :title="title3" style="height: 285px" class="shadow" hoverable>
            <baidu-map class="map" :center="center" :zoom="14" :scroll-wheel-zoom="true">
              <bm-marker
                :position="center"
                :dragging="false"
                animation="BMAP_ANIMATION_BOUNCE"
                :icon="{
                  url: require('../../static/pic/卡车.png'),
                  size: { width: 50, height: 50 },
                }"
              ></bm-marker>
              <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
            </baidu-map>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <a-modal
      title="设置温湿度阈值"
      :visible="humiDialogVisible"
      @ok="setHumiValue"
      @cancel="humiDialogVisible = false"
      width="500px"
    >
      <a-form-model :label-col="{ span: 7 }">
        <a-form-model-item label="温度下限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tempDown" />
        </a-form-model-item>
        <a-form-model-item label="温度上限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tempUp" />
        </a-form-model-item>
        <a-form-model-item label="湿度下限/%" :wrapper-col="{ span: 12 }">
          <a-input v-model="humiDown" />
        </a-form-model-item>
        <a-form-model-item label="湿度上限/%" :wrapper-col="{ span: 12 }">
          <a-input v-model="humiUp" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <a-modal
      title="设置胎温胎压阈值"
      :visible="tireDialogVisible"
      @ok="setTireValue"
      @cancel="tireDialogVisible = false"
      width="500px"
    >
      <a-form-model :label-col="{ span: 7 }">
        <a-form-model-item label="胎温上限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tireTempUp" />
        </a-form-model-item>
        <a-form-model-item label="胎压上限/bar" :wrapper-col="{ span: 12 }">
          <a-input v-model="tirePressUp" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>

    <div v-show="showPage === '1'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="humiBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-tabs v-model="humiTabname" tab-position="left" :key="humiTabKey" @tabClick="tabclick">
          <a-tab-pane
            v-for="(item, index) in tempKeys"
            :key="index"
            :tab="'监测点'+item.deviceName.slice(2,3)"
             >
            <!-- <div style="font-size: 26px; font-weight: 600">
              <span>{{ item.name }}</span>
            </div> -->
            <div style="font-size: 22px; font-weight: 600; line-height: 50px">
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <div v-if="!humiDataShow" style="text-align: center">
              <svg
                t="1657543275917"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1810"
                width="200"
                height="200"
              >
                <path
                  d="M102.4 896a409.6 51.2 0 1 0 819.2 0 409.6 51.2 0 1 0-819.2 0Z"
                  fill="#4A68CC"
                  opacity=".1"
                  p-id="1811"
                />
                <path
                  d="M116.736 376.832c0 8.704 6.656 15.36 15.36 15.36s15.36-6.656 15.36-15.36-6.656-15.36-15.36-15.36c-8.192 0-15.36 7.168-15.36 15.36zM926.72 832c-19.456 5.12-23.552 9.216-28.16 28.16-5.12-19.456-9.216-23.552-28.16-28.16 18.944-5.12 23.552-9.216 28.16-28.16 4.608 18.944 8.704 23.552 28.16 28.16zM202.24 323.072c-25.088 6.656-30.208 11.776-36.864 36.864-6.656-25.088-11.776-30.208-36.864-36.864 25.088-6.656 30.208-12.288 36.864-36.864 6.144 25.088 11.776 30.208 36.864 36.864zM816.64 235.008c-15.36 4.096-18.432 7.168-22.528 22.528-4.096-15.36-7.168-18.432-22.528-22.528 15.36-4.096 18.432-7.168 22.528-22.528 3.584 15.36 7.168 18.432 22.528 22.528zM882.688 156.16c-39.936 10.24-48.128 18.944-58.88 58.88-10.24-39.936-18.944-48.128-58.88-58.88 39.936-10.24 48.128-18.944 58.88-58.88 10.24 39.424 18.944 48.128 58.88 58.88z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="1812"
                />
                <path
                  d="M419.84 713.216v4.096l33.792 31.232 129.536-62.976L465.92 760.832v36.864l18.944-18.432v-0.512 0.512l18.944 18.432 100.352-122.88v-4.096z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="1813"
                />
                <path
                  d="M860.16 551.936v-1.024c0-1.024-0.512-1.536-0.512-2.56v-0.512l-110.08-287.232c-15.872-48.64-60.928-81.408-112.128-81.408H387.072c-51.2 0-96.256 32.768-112.128 81.408L164.864 547.84v0.512c-0.512 1.024-0.512 1.536-0.512 2.56V757.76c0 65.024 52.736 117.76 117.76 117.76h460.8c65.024 0 117.76-52.736 117.76-117.76v-204.8c-0.512-0.512-0.512-0.512-0.512-1.024zM303.616 271.36s0-0.512 0.512-0.512C315.392 233.984 349.184 209.92 387.072 209.92h249.856c37.888 0 71.68 24.064 83.456 60.416 0 0 0 0.512 0.512 0.512l101.888 266.24H588.8c-8.704 0-15.36 6.656-15.36 15.36 0 33.792-27.648 61.44-61.44 61.44s-61.44-27.648-61.44-61.44c0-8.704-6.656-15.36-15.36-15.36H201.728L303.616 271.36zM829.44 757.76c0 48.128-38.912 87.04-87.04 87.04H281.6c-48.128 0-87.04-38.912-87.04-87.04v-189.44h226.816c7.168 43.52 45.056 76.8 90.624 76.8s83.456-33.28 90.624-76.8H829.44v189.44z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="1814"
                />
                <path
                  d="M512 578.56c-14.336 0-25.6-11.264-25.6-25.6V501.76H253.44l83.968-219.136 0.512-1.024c7.168-21.504 26.624-35.84 49.152-35.84h249.856c22.528 0 41.984 14.336 49.152 35.84l0.512 1.024L770.56 501.76H537.6v51.2c0 14.336-11.264 25.6-25.6 25.6z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="1815"
                />
              </svg>
              <p>当前监测点20天内无历史数据</p>
            </div>
            <div v-if="humiDataShow">
              <a-spin tip="正在请求历史数据" :spinning="humiSpinning">
                <div
                  id="chart"
                  ref="chart"
                  style="height: 300px; width: 1450px"
                  v-if="humiTabname === index"
                ></div>
              </a-spin>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '3'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="tireBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>

        <a-tabs
          v-model="tireTabname"
          :key="tireTabKey"
          @tabClick="tabclick1"
            >
          <a-tab-pane v-for="(item, index) in tireList" :key="index" :tab="'胎'+index">
            <div
              style="
                font-size: 22px;
                font-weight: 600;
                line-height: 50px;
                margin-left: 50px;
              "
            >
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <div v-if="!tireDataShow" style="text-align: center;">
              <svg
                t="1657546223449"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2017"
                width="200"
                height="200"
              >
                <path
                  d="M102.4 896a409.6 51.2 0 1 0 819.2 0 409.6 51.2 0 1 0-819.2 0Z"
                  fill="#4A68CC"
                  opacity=".1"
                  p-id="2018"
                />
                <path
                  d="M116.736 376.832c0 8.704 6.656 15.36 15.36 15.36s15.36-6.656 15.36-15.36-6.656-15.36-15.36-15.36c-8.192 0-15.36 7.168-15.36 15.36zM926.72 832c-19.456 5.12-23.552 9.216-28.16 28.16-5.12-19.456-9.216-23.552-28.16-28.16 18.944-5.12 23.552-9.216 28.16-28.16 4.608 18.944 8.704 23.552 28.16 28.16zM202.24 323.072c-25.088 6.656-30.208 11.776-36.864 36.864-6.656-25.088-11.776-30.208-36.864-36.864 25.088-6.656 30.208-12.288 36.864-36.864 6.144 25.088 11.776 30.208 36.864 36.864zM816.64 235.008c-15.36 4.096-18.432 7.168-22.528 22.528-4.096-15.36-7.168-18.432-22.528-22.528 15.36-4.096 18.432-7.168 22.528-22.528 3.584 15.36 7.168 18.432 22.528 22.528zM882.688 156.16c-39.936 10.24-48.128 18.944-58.88 58.88-10.24-39.936-18.944-48.128-58.88-58.88 39.936-10.24 48.128-18.944 58.88-58.88 10.24 39.424 18.944 48.128 58.88 58.88z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="2019"
                />
                <path
                  d="M419.84 713.216v4.096l33.792 31.232 129.536-62.976L465.92 760.832v36.864l18.944-18.432v-0.512 0.512l18.944 18.432 100.352-122.88v-4.096z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="2020"
                />
                <path
                  d="M860.16 551.936v-1.024c0-1.024-0.512-1.536-0.512-2.56v-0.512l-110.08-287.232c-15.872-48.64-60.928-81.408-112.128-81.408H387.072c-51.2 0-96.256 32.768-112.128 81.408L164.864 547.84v0.512c-0.512 1.024-0.512 1.536-0.512 2.56V757.76c0 65.024 52.736 117.76 117.76 117.76h460.8c65.024 0 117.76-52.736 117.76-117.76v-204.8c-0.512-0.512-0.512-0.512-0.512-1.024zM303.616 271.36s0-0.512 0.512-0.512C315.392 233.984 349.184 209.92 387.072 209.92h249.856c37.888 0 71.68 24.064 83.456 60.416 0 0 0 0.512 0.512 0.512l101.888 266.24H588.8c-8.704 0-15.36 6.656-15.36 15.36 0 33.792-27.648 61.44-61.44 61.44s-61.44-27.648-61.44-61.44c0-8.704-6.656-15.36-15.36-15.36H201.728L303.616 271.36zM829.44 757.76c0 48.128-38.912 87.04-87.04 87.04H281.6c-48.128 0-87.04-38.912-87.04-87.04v-189.44h226.816c7.168 43.52 45.056 76.8 90.624 76.8s83.456-33.28 90.624-76.8H829.44v189.44z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="2021"
                />
                <path
                  d="M512 578.56c-14.336 0-25.6-11.264-25.6-25.6V501.76H253.44l83.968-219.136 0.512-1.024c7.168-21.504 26.624-35.84 49.152-35.84h249.856c22.528 0 41.984 14.336 49.152 35.84l0.512 1.024L770.56 501.76H537.6v51.2c0 14.336-11.264 25.6-25.6 25.6z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="2022"
                />
              </svg>
              <p>该轮胎20天内无数据</p>
            </div>
            <div v-if="tireDataShow">
              <a-spin tip="正在请求历史数据" :spinning="tireSpinning">
                <div
                  id="chart1"
                  ref="chart1"
                  style="height: 300px; width: 1450px; margin-left: 50px"
                  v-if="tireTabname===index "
                ></div>
              </a-spin>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '4'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="doorBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-spin tip="正在请求历史数据" :spinning="doorSpinning">
          <div id="chart3" ref="chart3" v-show = "doorShow" style="height: 300px; width: 1450px; margin-left: 50px"></div>
          <div id="chart3" ref="chart3" v-show = "!doorShow"   style="height: 300px; width: 1450px;  margin-top: 50px;text-align: center">
            <svg t="1659014108163" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13123" width="120" height="120"><path d="M402.432 356.3008m-286.5152 0a286.5152 286.5152 0 1 0 573.0304 0 286.5152 286.5152 0 1 0-573.0304 0Z" fill="#9FDFFF" p-id="13124"></path><path d="M731.648 546.9184m-253.0816 0a253.0816 253.0816 0 1 0 506.1632 0 253.0816 253.0816 0 1 0-506.1632 0Z" fill="#78CCFF" p-id="13125"></path><path d="M268.4416 570.8288m-229.2224 0a229.2224 229.2224 0 1 0 458.4448 0 229.2224 229.2224 0 1 0-458.4448 0Z" fill="#78CCFF" p-id="13126"></path><path d="M266.0864 570.8288h463.2064v229.2224H266.0864z" fill="#78CCFF" p-id="13127"></path><path d="M324.096 831.232h17.6128l82.7392 118.9888h0.6144v-118.9888h16.7936v146.2272h-17.2032L341.504 857.2416h-0.6144v120.2176H324.096v-146.2272zM536.8832 809.5232h14.5408l-72.4992 188.416h-14.7456l72.704-188.416zM616.5504 831.232h19.456l57.5488 146.2272h-18.2272l-15.5648-40.96h-67.1744l-15.5648 40.96h-18.0224l57.5488-146.2272z m-18.6368 91.136h56.5248l-27.648-73.1136h-0.8192l-28.0576 73.1136z" fill="#78CCFF" p-id="13128"></path></svg>
          <p style = "color: #71cbfd">十天内无数据</p>
          </div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDevice,
  getDeviceData,
  getDeviceHisData,
  changeLight,
  allProductData
} from "@/api/interface";
import { person, editPerson } from "@/api/user";
import * as echarts from "echarts";
export default {
  mounted() {
    this.timer = setInterval(this.prepare, 20000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  data() {
    return {
      title1: "",
      showPage: "0", //初始页面
      humiTabKey: "1", //温湿度tabs初始值
      tireTabKey: "1", //胎温tabs初始值
      humiTabname: 0,
      tireTabname: 0,
      oilData: "70", //油位
      volData: "22", //剩余容积
      capData: "45", //载重量
      door1: true,
      door2: false,
      light1: null,
      defaultChecked: null,
      light2: true,
      light3: true,
      spinning1: false,
      humiSpinning: false,
      tireSpinning: false,
      doorSpinning: false,
      alert: true,
      // num: "1", //冷机温度
      coor: {
        lng: 117.192,
        lat: 31.771
      },
      productkey: "", //传递过来的pk
      carNum: "", //传递过来的车牌号
      humiDkList: [],
      humiOriData: [], //温湿度传感数据器原始数组
      humiHandleData: [], //处理完的温湿度数据数组
      doorDkList: [],
      alarmDkList: [],
      tireDkList: [],
      devicerankList: [
        //报警条数排名
        { count: "5", deviceName: "温度传感器3" },
        { count: "2", deviceName: "温度传感器2" },
        { count: "2", deviceName: "温度传感器1" },
        { count: "2", deviceName: "胎温传感器3" },
        { count: "1", deviceName: "胎压传感器8" },
        { count: "1", deviceName: "胎温传感器5" }
        // {count:"9",deviceName:"温度传感器6",},
      ],
      sensorList: [],
      hisStartTime: "",
      hisEndTime: "",
      hisDate: [],
      hisTemp: [],
      hisHumi: [],
      maxtemp: "",
      mintemp: "",
      maxhumi: "",
      minhumi: "",
      hisTireDate: [],
      hisTireTemp: [],
      hisTirePress: [],
      maxtiretemp: "",
      mintiretemp: "",
      maxtirepress: "",
      mintirepress: "",
      hisVibDate: [],
      hisVib: [],

      doorOriData: [],
      doorHandleData: [],
      hisDoorDate: [],
      hisDoor1: [],
      hisDoor2: [],

      tireOriData: [],
      tireHandleData: [],
      tireList: [],

      lightOriData: [],
      lightHandleData: [],

      tempUp: "40",
      humiUp: "100",
      tempDown: "-30",
      humiDown: "40",
      tireTempUp: "90",
      tirePressUp: "10",
      shake: "",
      oil: "10",
      humiDialogVisible: false,
      tireDialogVisible: false,
      timer: "",
      humiDataShow: true,
      tireDataShow: true,
      center: {
        lng: "",
        lat: ""
      },
      gpsDkList: [],
      oilDkList: [],
      oilData: "",
      tireShow: false,
      accDkList: [],
      oilsShow: false,
      vibShow: false,
      typeIdentify: "",
      productData: {
        oil: "0",
        gps: {
          lng: "",
          lat: ""
        },
        acc: "2",
        door1: false,
        door2: false,
        light1: true,
        light2: true,
        light3: true,
        temp1: {
          temp: "0",
          humi: "0"
        },
        temp2: {
          temp: "0",
          humi: "0"
        },
        temp3: {
          temp: "0",
          humi: "0"
        },
        temp4: {
          temp: "0",
          humi: "0"
        },
        temp5: {
          temp: "0",
          humi: "0"
        },
        temp6: {
          temp: "0",
          humi: "0"
        },
        temp7: {
          temp: "0",
          humi: "0"
        },
        tire1: {
          press: "0",
          humi: "0"
        },
        tire2: {
          press: "0",
          humi: "0"
        },
        tire3: {
          press: "0",
          humi: "0"
        },
        tire4: {
          press: "0",
          humi: "0"
        },
        tire5: {
          press: "0",
          humi: "0"
        },
        tire6: {
          press: "0",
          humi: "0"
        },
        tire7: {
          press: "0",
          humi: "0"
        },
        tire8: {
          press: "0",
          humi: "0"
        },
        tire9: {
          press: "0",
          humi: "0"
        },
        tire10: {
          press: "0",
          humi: "0"
        },
        tire11: {
          press: "0",
          humi: "0"
        },
        tire12: {
          press: "0",
          humi: "0"
        },
        alert1: false,
        alert2: false,
        alert3: false
      },
      tempKeys: [],
      oilKeys: [],
      accKeys: [],
      gpsKeys: [],
      doorKeys: [],
      tireKeys: [],
      deviceKeys: [],
      title1: "厢内温湿度监测",
      title2: "胎温胎压",
      title3: "",
      item1: "1",
      item2: "1",
      doorShow: true
    };
  },
  watch: {
    $route(to, from) {
      //监听路由  每次跳转到该页面的时候，只渲染一遍，所以需要每次跳转的时候都要获取一次数据
      if (to.path == "/list/details") {
        this.prepare();
      }
      deep: true;
    }
  },
  //   hisVib() {
  //     console.log(this.hisVib);
  //     if (this.hisVib.length !== 0) {
  //       this.$nextTick(() => {
  //         // 确保dom异步加载完毕
  //         this.drawVib();
  //       });
  //     }
  //   },
  //   oilData() {
  //     this.$nextTick(() => {
  //       // 确保dom异步加载完毕
  //       this.drawOil();
  //     });
  //   }
  // },
  created() {
    this.prepare();
  },
  methods: {
      prepare() {
      console.log("准备");
var username = window.sessionStorage.getItem("username")
      this.role = window.sessionStorage.getItem("role");
      this.productKey = window.sessionStorage.getItem("productKey");
      console.log(this.productKey);
      var pkList = [];
      pkList.push(this.productKey);
      var data = {
        username: username,
        pkList: pkList,
        startTime: 111111
      };
      allProductData(data).then(res => {
        console.log(res);
        if (res.msg == "ok") {
          this.carNum = res.data[0].productName;
          this.title3 = this.carNum + "    行进中（已行驶99km 速度50km/h）";
          console.log(this.carNum);
          this.typeIdentify = res.data[0].typeIdentify;
          this.tempKeys = [];
          this.oilKeys = [];
          this.accKeys = [];
          this.gpsKeys = [];
          this.doorKeys = [];
          this.tireKeys = [];
          this.deviceKeys = [];
          this.tireList = [];
          res.data[0].deviceData.forEach(item => {
            this.deviceKeys.push(item.deviceKey);
            if (item.deviceName == "TH1") {
              this.productData.temp1.temp = item.temp;
              this.productData.temp1.humi = item.humi;
              this.time1 = item.date;
              this.title1 = "厢内温湿度监测";
              this.title1 += "(";
              this.title1 += this.time1;
              this.title1 += ")";
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH2") {
              this.productData.temp2.temp = item.temp;
              this.productData.temp2.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH3") {
              this.productData.temp3.temp = item.temp;
              this.productData.temp3.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH4") {
              this.productData.temp4.temp = item.temp;
              this.productData.temp4.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH5") {
              this.productData.temp5.temp = item.temp;
              this.productData.temp5.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH6") {
              this.productData.temp6.temp = item.temp;
              this.productData.temp6.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "TH7") {
              this.productData.temp7.temp = item.temp;
              this.productData.temp7.humi = item.humi;
              var obj = {
                deviceName: item.deviceName,
                deviceKey: item.deviceKey,
                date: item.date
              };
              this.tempKeys.push(obj);
            }
            if (item.deviceName == "Oil") {
              if (item.oil < 0) {
                this.productData.oil = 0;
              } else {
                this.productData.oil = item.oil;
              }

              this.oilKeys.push(item.deviceKey);
            }
            if (item.deviceName == "ACC") {
              this.productData.acc = item.acc.X + item.acc.Y + item.acc.Z;
              this.accKeys.push(item.deviceKey);
            }

            if (item.deviceName.includes("TTP")) {
              this.tireList.push(item);
            }
            if (item.deviceName.includes("Alarm")) {
              this.productData.alert1 = item.alarm;
              this.productData.alert2 = item.alarm;
              this.productData.alert3 = item.alarm;
            }
            if (item.deviceName.includes("GPS")) {
              console.log(item.gps);
              if (item.gps.Lat == "0") {
                this.center.lat = "31.772366";
                if (item.gps.Lon == "0") {
                  this.center.lng = "117.19046";
                }
              } else {
                this.center.lat = item.gps.Lat;
                this.center.lng = item.gps.Lon;
              }
              console.log(this.center);
            }
            if (item.deviceName == "door_1") {
              this.doorKeys.push(item.deviceKey)
              this.productData.door1 = item.door.door_1;
              this.productData.door2 = item.door.door_2;
              if (item.electrical[0] == 0) {
                this.productData.light1 = false;
              } else {
                this.productData.light1 = true;
              }
              this.light();
            }
          });

          console.log(this.tireList);
          if (this.tireList.length == 0) {
            this.tireShow = true;
          } else {
            this.tireShow = false;
            console.log(this.productData);
            function sortNa(a, b) {
              return a.deviceName - b.deviceName;
            }
            this.tireList.sort(sortNa);
            // this.tempKeys.sort(sortNa)
            console.log(this.tireList);
            this.time2 = this.tireList[0].date;
            this.title2 = "胎温胎压";
            this.title2 += "(";
            this.title2 += this.time2;
            this.title2 += ")";
            this.productData.tire1.press =
              Math.round(this.tireList[0].tirePress * 1000) / 1000000;
            this.productData.tire1.humi = this.tireList[0].tireTemp;
            this.productData.tire2.press =
              Math.round(this.tireList[1].tirePress * 1000) / 1000000;
            this.productData.tire2.humi = this.tireList[1].tireTemp;
            this.productData.tire3.press =
              Math.round(this.tireList[2].tirePress * 1000) / 1000000;
            this.productData.tire3.humi = this.tireList[2].tireTemp;
            this.productData.tire4.press =
              Math.round(this.tireList[3].tirePress * 1000) / 1000000;
            this.productData.tire4.humi = this.tireList[3].tireTemp;
            this.productData.tire5.press =
              Math.round(this.tireList[4].tirePress * 1000) / 1000000;
            this.productData.tire5.humi = this.tireList[4].tireTemp;

            this.productData.tire6.press =
              Math.round(this.tireList[5].tirePress * 1000) / 1000000;
            this.productData.tire6.humi = this.tireList[5].tireTemp;

            this.productData.tire7.press =
              Math.round(this.tireList[6].tirePress * 1000) / 1000000;
            this.productData.tire7.humi = this.tireList[6].tireTemp;

            this.productData.tire8.press =
              Math.round(this.tireList[7].tirePress * 1000) / 1000000;
            this.productData.tire8.humi = this.tireList[7].tireTemp;
            this.productData.tire9.press =
              Math.round(this.tireList[8].tirePress * 1000) / 1000000;
            this.productData.tire9.humi = this.tireList[8].tireTemp;
            this.productData.tire10.press =
              Math.round(this.tireList[9].tirePress * 1000) / 1000000;
            this.productData.tire10.humi = this.tireList[9].tireTemp;
            this.productData.tire11.press =
              Math.round(this.tireList[10].tirePress * 1000) / 1000000;
            this.productData.tire11.humi = this.tireList[10].tireTemp;

            this.productData.tire12.press =
              Math.round(this.tireList[11].tirePress * 1000) / 1000000;
            this.productData.tire12.humi = this.tireList[11].tireTemp;
          }
          var username = window.sessionStorage.getItem("username");
          person(username).then(res => {
            console.log(res);
            if (res.msg == "ok") {
              this.tireTempUp = res.data.extraInfo.thresholdValue.tire.tireTemp;
              this.tirePressUp =
                res.data.extraInfo.thresholdValue.tire.tirePress;
              this.shake = res.data.extraInfo.thresholdValue.shake;
              this.oil = res.data.extraInfo.thresholdValue.oil;
              this.humiDown =
                res.data.extraInfo.thresholdValue.tempAndHumi.humiDown;
              this.humiUp =
                res.data.extraInfo.thresholdValue.tempAndHumi.humiUp;
              this.tempDown =
                res.data.extraInfo.thresholdValue.tempAndHumi.tempDown;
              this.tempUp =
                res.data.extraInfo.thresholdValue.tempAndHumi.tempUp;
              console.log(this.oil);
              this.tempDeviceKey = this.tempKeys[0].deviceKey;
              // this.tempHistory();
              // console.log(this.oilKeys);
              // if (this.tireList.length == 0) {
              //   this.tireShow = true;
              // } else {
              //   this.pressDevcieKey = this.tireList[0].deviceKey;
              //   this.drawPress();
              // }
              // } else if (this.role == "user") {
              this.drawOil();
              console.log(this.accKeys);
              this.drawAcc();
            }
          });

          // }
        }
      });
    },

    drawOil() {
      console.log(this.oil);
      var chartDom = document.getElementById("oil");
      console.log(chartDom);
      var myChart = echarts.init(chartDom);
      var value = this.oil / 100;

      var option = {
        series: [
          {
            type: "gauge",
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              lineStyle: {
                // 仪表盘轴线样式。
                width: 10,
                color: [
                  [value, "#f04864"],
                  [1, "#1890ff"]
                ]
              }
            },
            pointer: {
              // 仪表盘指针
              length: "80%",
              width: 10,
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              // 刻度(线)样式。
              distance: -30,
              length: 2,
              lineStyle: {
                color: "#fff",
                width: 2
              }
            },
            splitLine: {
              // 分隔线样式
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 3
              }
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 15
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 30
            },
            data: [
              {
                value: this.productData.oil,
                name: "当前油位",
                fontSize: 30
              }
            ]
          }
        ]
      };
      window.addEventListener("resize", function() {
        myChart.resize();
      });
      option && myChart.setOption(option);
    },
    hisTem1(item) {
      this.tempKeys.sort(function(a, b) {
        var sensorA = a.deviceName; // ignore upper and lowercase
        var sensorB = b.deviceName; // ignore upper and lowercase
        if (sensorA < sensorB) {
          return -1;
        }
        if (sensorA > sensorB) {
          return 1;
        }
        return 0;
      });
      console.log(this.tempKeys);
      console.log(item);
      this.item1 = item - 1;
      this.humiTabKey = "1";
      this.showPage = "1";
      this.humiSpinning = true;

      this.tempEchart();

    },
    tempEchart() {
       this.humiTabname = this.item1
      this.hisEndTime = Date.parse(new Date()) / 1000;
      getDeviceHisData({
        deviceKey: this.tempKeys[this.item1].deviceKey,
        startTime: this.hisEndTime - 10 * 86400,
        endTime: this.hisEndTime
      }).then(res => {
        console.log(res);
        if ((res.msg = "ok")) {
          this.humiDataShow = true
          var tempDate = [];
          var tempData = [];
          var humiData = [];
          res.data.deviceData.forEach(item => {
            tempDate.push(item.date);
            tempData.push(item.temp);
            humiData.push(item.humi);
          });
          this.humiSpinning = false;
          var myChart = echarts.init(document.getElementById("chart"));
          var colors = ["#7cb305", "#1890ff"];

          var option = {
            color: colors,
            title: {
              text:
                "温湿度历史数据(监测点" +
                res.data.deviceData[this.item1].deviceName.slice(2, 3) +
                ")",
              left: "center",
              textStyle: {
                color: "#40c3dc"
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: ["温度", "湿度"],
              left: 20,
              textStyle: {
                color: "#31bed9"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            color: colors,
            xAxis: {
              type: "category",
              boundaryGap: false, //横轴顶格
              data: tempDate,
              axisLabel: {
                formatter: function(value) {
                  return value.slice(5, 10) + "\n" + value.slice(11, 16);
                },
                textStyle: {
                  color: "#40c3dc" //坐标值得具体的颜色
                }
              }
            },
            yAxis: [
              {
                type: "value",
                name: "温度",
                position: "left",
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: colors[0]
                  }
                },
                axisLabel: {
                  formatter: "{value} ℃"
                }
              },
              {
                type: "value",
                name: "湿度",
                position: "right",
                offset: 6,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: colors[1]
                  }
                },
                axisLabel: {
                  formatter: "{value} %"
                }
              }
            ],
            series: [
              {
                name: "温度",
                type: "line",
                data: tempData
              },
              {
                name: "湿度",
                type: "line",
                yAxisIndex: 1, //解决了左右y轴相同刻度，选定哪条y
                // stack: "总量",
                data: humiData
              }
            ]
          };
          option && myChart.setOption(option);
          window.addEventListener("resize", function() {
            myChart.resize();
          });
        } else {
          this.humiDataShow = true
           this.humiSpinning = false;
        }
      });
    },

    humiBack() {
      // this.timer = setInterval(this.getQuery, 60000);
      this.showPage = "0";
      this.humiTabKey = "1";
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
    },

    hisDoor() {
            this.showPage = "4";
      this.doorSpinning = true;
      // console.log("hisDoor");
         this.hisEndTime = Date.parse(new Date()) / 1000;
      getDeviceHisData({
        deviceKey: this.doorKeys[0],
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.doorShow = true;
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDoorDate.push(res.data.deviceData[i].date);
            this.hisDoor1.push(res.data.deviceData[i].door.door_1);
            this.hisDoor2.push(res.data.deviceData[i].door.door_2);
          }
                  for (var i = 0; i < this.hisDoor1.length; i++) {
          switch (this.hisDoor1[i]) {
            case false:
              this.hisDoor1[i] = 0;
              break;
            case true:
              this.hisDoor1[i] = 1;
              break;
          }
        }
        for (var i = 0; i < this.hisDoor2.length; i++) {
          switch (this.hisDoor2[i]) {
            case false:
              this.hisDoor2[i] = 0;
              break;
            case true:
              this.hisDoor2[i] = 1;
              break;
          }
        }
                this.drawDoor();

        this.doorSpinning = false;
        } else {
          this.doorShow = false;
            this.doorSpinning = false;
        }
      });
    },


    hisTire(item) {
      this.item2  = item
      console.log(this.item2)
      this.showPage = "3";
      this.tireSpinning = true;
       this.tireTabKey = "1";
       this.tireDataShow = true
      this.pressEchart()
    },
    pressEchart() {
        this.tireTabKey =  this.item2
        this.tireTabname =  parseInt(this.item2)
      this.hisEndTime = Date.parse(new Date()) / 1000;
       getDeviceHisData({
        deviceKey: this.tireList[this.item2].deviceKey,
        startTime: this.hisEndTime - 20 * 86400, //86400
        endTime: this.hisEndTime
      }).then((res)=>{
        console.log(res)
        if (res.msg == "ok") {
          this.tireDataShow = true
          this.tireSpinning = false
          var date = [];
          var tempData = [];
          var pressData = [];
          res.data.deviceData.forEach(item => {
            date.push(item.date);
            pressData.push(Math.round(item.tirePress * 1000) / 1000000);
            tempData.push(item.tireTemp);
          });
          console.log(date);
          console.log(tempData);
          console.log(pressData);
          var myChart = echarts.init(document.getElementById("chart1"));
          console.log(myChart);
          var colors = ["#d92179", "#008b9c"];

          var option = {
            color: colors,
            title: {
             text: '胎温胎压数据(胎'+this.item2+')',
              left: "center",
              textStyle: {
                color: "#43bfdb"
              }
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: ["胎温", "胎压"],
              left: 20,
              textStyle: {
                color: "#fff"
              }
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            color: colors,
            xAxis: {
              type: "category",
              boundaryGap: false, //横轴顶格
              data: date,
              axisLabel: {
                formatter: function(value) {
                  return value.slice(5, 10) + "\n" + value.slice(11, 16);
                },
                textStyle: {
                  color: "#43bfdb" //坐标值得具体的颜色
                }
              }
            },
            yAxis: [
              {
                type: "value",
                name: "胎温",
                position: "left",
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: colors[0]
                  }
                },
                axisLabel: {
                  formatter: "{value} ℃"
                }
              },
              {
                type: "value",
                name: "胎压",
                position: "right",
                offset: 6,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: colors[1]
                  }
                },
                axisLabel: {
                  formatter: "{value} kPa"
                }
              }
            ],
            series: [
              {
                name: "温度",
                type: "line",
                data: tempData
              },
              {
                name: "湿度",
                type: "line",
                yAxisIndex: 1, //解决了左右y轴相同刻度，选定哪条y
                // stack: "总量",
                data: pressData
              }
            ]
          };
          option && myChart.setOption(option);
          // window.addEventListener("resize", function() {
          //   myChart.resize();
          // });
        } else {
           this.tireDataShow = false
           console.log("无数据")
            this.tireSpinning = false
        }
      })
    },
   

    tireBack() {
      this.showPage = "0";
      this.tireTabKey = "1";
    },
    doorBack() {
      this.showPage = "0";
      this.hisDoorDate = [];
      this.hisDoor1 = [];
      this.hisDoor2 = [];
    },

    changeLight1(checked) {
      console.log(this.light1);
      this.spinning1 = true;
      if (checked === true) {
        console.log("正在开灯");
        let data1 = "EFEFEF0101CF" + " " + this.typeIdentify;
        changeLight(data1).then(res => {
          console.log(res);

          this.productData.light1 = true;
          this.defaultChecked = true;
          this.spinning1 = false;
        });
      } else {
        console.log("正在关灯");
        let data2 = "EFEFEF0100CE" + " " + this.typeIdentify;
        changeLight(data2).then(res => {
          console.log(res);
          this.productData.light1 = false;
          this.defaultChecked = false;
          this.spinning1 = false;
          this.prepare()
        });
      }
  
    },

    tabclick(e) {
      console.log(e)
      this.item1 = e
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
     
      this.humiSpinning = true;
      this.tempEchart();
      
    },
    tabclick1(e) {
      // console.log(e)
      this.item2 = e
         this.tireSpinning = true;
      this.pressEchart()
    },
  
    drawDoor() {
      console.log("绘制门状态")
      var myChart = echarts.init(document.getElementById("chart3"));
      var colors = ["#5470C6", "#91CC75"];
      var option = {
        color: colors,
        title: {
          text: "车门状态(0为关，1为开)",
          left: "center",
          textStyle: {
            fontSize: 28
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["门1", "门2"],
          left: 80
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: this.hisDoorDate,
           axisLabel: {
            formatter: function(value) {
              return value.slice(5, 10) + "\n" + value.slice(11, 16);
            }
          }
        },
        yAxis: {
          type: "value",
          interval: 1
        },
        series: [
          {
            name: "门1",
            type: "line",
            step: "start",
            data: this.hisDoor1
          },
          {
            name: "门2",
            type: "line",
            step: "middle",
            data: this.hisDoor2
          }
        ]
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },

   

    openHumi() {
      this.humiDialogVisible = true;
    },
    setHumiValue() {


      //1. 获取当前用户信息
      var username = window.sessionStorage.getItem("username");
      console.log(username);
      person(username).then(res => {
        // console.log(res)
        if (res.msg == "ok") {
          console.log(res);
          // res.data.extraInfo = {}
          // res.data.extraInfo.thresholdValue= {}
          // res.data.extraInfo.thresholdValue.tempAndHumi= {}
          res.data.extraInfo.thresholdValue.tempAndHumi.tempDown = this.tempDown;
          res.data.extraInfo.thresholdValue.tempAndHumi.tempUp = this.tempUp;
          res.data.extraInfo.thresholdValue.tempAndHumi.humiDown = this.humiDown;
          res.data.extraInfo.thresholdValue.tempAndHumi.humiUp = this.humiUp;
          // console.log(res.data)
          editPerson(res.data).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              this.$message.success("修改成功!");
              this.humiDialogVisible = false;
              this.prepare();
            }
          });
        }
      });
    },

    openOil() {
      //   console.log("openOil");
      // },
      this.$prompt("设置油位报警值/%", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          //1. 获取当前用户信息
          var username = window.sessionStorage.getItem("username");
          console.log(username);
          person(username).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              console.log(value);
              res.data.extraInfo.thresholdValue.oil = value;
              console.log(res.data);
              editPerson(res.data).then(res => {
                // console.log(res)
                if (res.msg == "ok") {
                  this.$message({
                    type: "success",
                    message: "油位低于: " + value + "报警"
                  });
                  this.prepare();
                }
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    openVib() {
      //   console.log("openVib");
      // },
      this.$prompt("设置震动报警值/g", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          //1. 获取当前用户信息
          var username = window.sessionStorage.getItem("username");
          console.log(username);
          person(username).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              res.data.extraInfo.thresholdValue.shake = value;
              // console.log(res.data)
              editPerson(res.data).then(res => {
                // console.log(res)
                if (res.msg == "ok") {
                  this.$message({
                    type: "success",
                    message: "车辆震动最大阈值: " + value
                  });
                  this.prepare();
                }
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    openTire() {
      this.tireDialogVisible = true;
    },
    setTireValue() {
      //1. 获取当前用户信息
      var username = window.sessionStorage.getItem("username");
      console.log(username);
      person(username).then(res => {
        // console.log(res)
        if (res.msg == "ok") {
          res.data.extraInfo.thresholdValue.tire = {
            tireTemp: "",
            tirePress: ""
          };
          res.data.extraInfo.thresholdValue.tire.tireTemp = this.tireTempUp;
          res.data.extraInfo.thresholdValue.tire.tirePress = this.tirePressUp;
          editPerson(res.data).then(res => {
            if (res.msg == "ok") {
              this.$message.success("修改成功!");
              this.tireDialogVisible = false;
              this.prepare();
            }
          });
        }
      });
    },

   
    light() {
      this.light1 = this.productData.light1;
      this.light2 = this.productData.light2;
      this.light3 = this.productData.light3;
    },
    changeLight() {
      console.log(this.light1);
      if (this.role == "admin") {
        this.loading1 = true;
        this.light1 = !this.light1;
        var data = "";
        if (this.light1 == false) {
          data = "EFEFEF0100CE" + " " + this.typeIdentify;
        } else if (this.light1 == true) {
          data = "EFEFEF0101CF" + " " + this.typeIdentify;
        }
        changeLight(data).then(res => {
          console.log(res);
          this.loading1 = false;
        });
      } else if (this.role == "user") {
        this.$message.info("您没有权限控制灯光开关！！");
      }
    },
    drawAcc() {
      if (this.accKeys.length == 0) {
        this.accShow = false;
        this.text = "没有注册该设备";
      }
      var endTime = Math.round(new Date() / 1000);
      var startTime = endTime - 7200 * 12 * 30;
      var obj = {
        deviceKey: this.accKeys[0],
        startTime: startTime,
        endTime: endTime,
        asc: 1
      };
      getDeviceHisData(obj).then(res => {
        console.log(res);
        if (res.msg == "未找到记录") {
          this.accShow = false;
          this.text = "一天内无数据";
        } else if (res.msg == "ok") {
          console.log(res);

          var accDate = [];
          var accData = [];
          res.data.deviceData.forEach(item => {
            accDate.push(item.date);
            accData.push(item.acc.X + item.acc.Y + item.acc.Z);
          });
          var chartDom = document.getElementById("acc");
          console.log(chartDom);
          var myChart = echarts.init(chartDom);
          var option;

          option = {
            color: "#00a1da",
            legend: {
              data: accDate
            },
            tooltip: {
              trigger: "axis"
            },
            xAxis: {
              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              data: accDate,
              axisLabel: {
                formatter: function(value) {
                  return value.slice(5, 10) + "\n" + value.slice(11, 16);
                }
                // textStyle: {
                //   color: "#fff" //坐标值得具体的颜色
                // }
              }
            },
            yAxis: {
              type: "value",
              axisLabel: {
                formatter: "{value}"
                // textStyle: {
                //   color: "#fff" //坐标值得具体的颜色
                // }
              }
              // axisLine: {
              //   show: true, // Y轴线
              //   lineStyle: {
              //     type: "dashed",
              //     color: "#fff"
              //   }
              // }
            },
            series: [
              {
                data: accData,
                type: "line",
                smooth: true,
                markLine: {
                  data: [
                    {
                      name: "最大震动阈值",
                      yAxis: this.shake,
                      label: {
                        show: true,
                        position: "end",
                        formatter: "设置阈值"
                      },
                      lineStyle: {
                        normal: {
                          width: 2,
                          color: "#ff5d1d"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          };
          window.addEventListener("resize", function() {
            myChart.resize();
          });
          option && myChart.setOption(option);
        }
      });
    },
    
  }
};
</script>

<style lang="less" scope>
.ant-card-body {
  padding: 10px 10px;
  /* background: black; */
}
.card {
  margin: 3px;
}

.shadow {
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
}

.home1 {
  background: #ffffff;
}

.container {
  display: flex;
  flex-direction: column;
}
.carriage1 {
  margin: 20px 0px 0px 240px;
}
.oil {
  // background: rgb(233, 219, 219);
  width: 100%;
  height: 350px;
  margin-top: 0px;
  // margin: -10px 0px 0px 60px;
}
.map {
  width: 100%;
  height: 251px;
  margin: -10px 0px 0px -10px;
}
.error {
  color: red;
}
</style>
