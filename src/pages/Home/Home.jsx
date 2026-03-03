import "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { CartIcon, CartInIcon, CartOutIcon, StockIcon, UsersIcon } from "../../assets/IconsGroup";
import { Table } from "antd";

const Home = ()=>{
    const cols = [
        {
            title: '#',
            dataIndex: 'code',
            key: 'name',
            render: (text)=>(
              <span style={{color: "crimson"}}>{text}</span>
            )
        },
        {
            title: 'اسم المنتج',
            dataIndex: 'name',
            key: 'age',
        },
        {
            title: 'الكمية المباعة',
            dataIndex: 'qty',
            key: 'address',
        },
    ]
    const dataSource = [
        {
            key: '1',
            name: 'IPhone 16 Gary',
            code: "432-PH-YY",
            qty: 34,
        },
        {
            key: '2',
            name: 'Macbook Pro 16" black',
            code: "88-LP-YY",
            qty: 52,
        },
    ];

    return(
    <main class="main-content">
        <div class="stats-grid flex justify-center">
          <div class="stat-card">
            <div class="stat-icon purple">
                <UsersIcon />
            </div>
            <div class="stat-info">
              <p class="stat-label">المستخدمين</p>
              <h3 class="stat-value">24,583</h3>
              <div class="stat-trend positive">
                <i class="fas fa-arrow-up"></i>
                <span>12.5% من اخر شهر</span>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon blue">
                <CartOutIcon />
            </div>
            <div class="stat-info">
              <p class="stat-label">اجمالي المبيعات</p>
              <h3 class="stat-value">$150,492</h3>
              <div class="stat-trend positive">
                <i class="fas fa-arrow-up"></i>
                <span>8.3% من اخر شهر</span>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon green">
                <CartInIcon />
            </div>
            <div class="stat-info">
              <p class="stat-label">اجمالي المشتريات</p>
              <h3 class="stat-value">$115,492</h3>
              <div class="stat-trend positive">
                <i class="fas fa-arrow-up"></i>
                <span>18.2% من اخر شهر</span>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon orange">
                <StockIcon />
            </div>
            <div class="stat-info">
              <p class="stat-label">المنتجات في المخزن</p>
              <h3 class="stat-value">23.8%</h3>
              <div class="stat-trend negative">
                <i class="fas fa-arrow-down"></i>
                <span>2.1% من اخر شهر</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
            <div className="flex w-6/12" dir="rtl">
                <Line data={{
                    labels: ['مايو' , 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر'],
                    datasets: [
                        {
                        label: 'مبيعات اخر 6 أشهر',
                        data: [1500, 24556, 500876, 40936, 96543, 700368, 1009287],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                    }}
                />
            </div>
            <div className="w-5/12 rounded-md">
                <Table className="[&_th]:!bg-gray-100" pagination={false} dataSource={dataSource} columns={cols} />
            </div>
        </div>


    </main>
    )
}

export default Home;