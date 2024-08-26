import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ProductsService } from 'src/products';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly productsService: ProductsService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createOrderDto: CreateOrderDto, authHeader: string): Promise<Order> {
    const token = authHeader.split(' ')[1];
    const decodedToken = this.jwtService.verify(token);
    const userId = decodedToken.id;

    const products = await this.productsService.findMany(createOrderDto.productIds);
    
    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    const order = this.orderRepository.create({
      ...createOrderDto,
      userId,
      totalPrice,
      products
    });

    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find({ relations: ['products', 'user'] });
  }

  async findOne(id: number): Promise<Order> {
    return await this.orderRepository.findOne({
      where: { id },
      relations: ['products', 'user'],
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return await this.orderRepository.save({ ...updateOrderDto, id });
  }

  async remove(id: number): Promise<void> {
    return await this.orderRepository.delete(id).then(() => { });
  }
}
