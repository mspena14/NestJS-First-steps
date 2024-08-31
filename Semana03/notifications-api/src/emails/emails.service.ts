import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { NodemailerProvider } from './providers/nodemailerProvider';
import { TemplatesService } from 'src/templates/templates.service';

@Injectable()
export class EmailsService {

  constructor(
    private readonly nodemailer: NodemailerProvider,
    private readonly emailAdapter: TemplatesService
    ){}

    
}
